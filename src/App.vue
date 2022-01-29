<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <header>
      <div class="title">My personal costs</div>
    </header>
    <br>
    <button @click="show=!show">ADD +</button>
    <br>
    <main>
      <br>
      <AddPaymentForm v-if="show" @add="add"/>
      <button v-if="show" @click="show=!show">CLOSE</button>
      <payments-display :items="paymentsList"/>
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
import PaymentsDisplay from "@/components/payments";
import AddPaymentForm from "@/components/AddPaymentForm";
export default {
  name: '',
  components: {
    AddPaymentForm,
    PaymentsDisplay,
  },
  data(){
    return {
      show: false,
      paymentsList:[],
    }
  },
  methods: {
    add (data){
      this.paymentsList = [...this.paymentsList, data]
    },
    fetchData() {
      return [
        {
          id: "1",
          date: '20.01.2022',
          category: 'Food',
          value: 169,
        },
        {
          id: "2",
          date: '21.01.2022',
          category: 'Transport',
          value: 300,
        },
        {
          id: "3",
          date: '21.01.2022',
          category: 'Food',
          value: 800,
        },
      ]
    }
  },
    created(){
      this.paymentsList = this.fetchData()
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
