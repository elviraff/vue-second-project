<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <header>
      <div class="title">My personal costs</div>
      <div>Total: {{gFPV}}</div>
    </header>
    <br>
    <button @click="show=!show">ADD +</button>
    <br>
    <main>
      <br>
      <AddPaymentForm v-if="show" @add="add"/>
      <payments-display :items="paymentsList"/>
      <pagination :length="12" :cur="curPage" :n="3" @paginate="onChangePage"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "@/components/payments";
import AddPaymentForm from "@/components/AddPaymentForm";
// import {mapMutations} from 'vuex';
import {mapActions, mapGetters} from 'vuex';
import Pagination from "@/components/Pagination";
export default {
  name: '',
  components: {
    AddPaymentForm,
    PaymentsDisplay,
    Pagination
  },
  data(){
    return {
      show: false,
      curPage: 1,
      selected: '',
      n: 10
    }
  },
  computed: {
    gFPV() {
      return this.$store.getters.getFullPaymentValue
    },
    paymentsList() {
      return this.$store.getters.getPaymentList
    },
    ...mapGetters([
        'getCategoryList'
    ])
  },
  methods: {
    // ...mapMutations([
    //     'setPaymentsListData',
    // ]),
    add (data){
      // this.paymentsList = [...this.paymentsList, data]
      this.$store.commit('addDataToPaymentList', data)
    },
    ...mapActions([
      'loadCategories',
      'fetchData'
    ]),
    onChangePage(page){
      this.curPage = page
      this.fetchData(page)
    },
    // fetchData() {
    //   return [
    //     {
    //       id: "1",
    //       date: '20.01.2022',
    //       category: 'Food',
    //       value: 169,
    //     },
    //     {
    //       id: "2",
    //       date: '21.01.2022',
    //       category: 'Transport',
    //       value: 300,
    //     },
    //     {
    //       id: "3",
    //       date: '21.01.2022',
    //       category: 'Food',
    //       value: 800,
    //     },
    //   ]
    // }
  },
    created(){
    this.fetchData(this.curPage)
    // this.$store.dispatch('fetchData')
    // this.setPaymentsListData(this.fetchData())
    //   this.$store.commit('setPaymentsListData', this.fetchData())
      // this.paymentsList = this.fetchData()
    },
  mounted(){
    if (!this.getCategoryList.length) {
      this.loadCategories()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
