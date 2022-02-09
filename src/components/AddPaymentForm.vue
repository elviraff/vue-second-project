<template>
  <div class="wrapper">
    <input class="input_style" placeholder="Payment amount" v-model="value" />
    <div class="select">
      <select v-model="category">
        <option v-for="(option, idx) in options" :key="idx">{{option}}</option>
      </select>
    </div>
    <br>
    <input class="input_style" placeholder="Set new category" v-model="newCategory" />
    <button class="select" @click="addCategory">Create new Category</button>
    <br>
    <input class="input_style" placeholder="Payment description" v-model="category" />
    <input class="input_style" placeholder="Payment date" v-model="date" />
    <button class="input_style" @click="onSaveClick">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data(){
    return{
      value: 0,
      category: "",
      date:"",
      id:4,
      newCategory: ""
    }
  },
  computed: {
    getCurrentDate() {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    options(){
      return this.$store.getters.getCategoryList
    },
  },
  methods: {
    onSaveClick(){
      const data = {
          id: this.id++,
          value: +this.value,
          category: this.category,
          date: this.date || this.getCurrentDate,
        };
      this.$emit('add', data)
      console.log(data)
    },
    addCategory(){
      this.options.push(this.newCategory)
    }
    },
  async created(){
    if (!this.options.length){
      await this.$store.dispatch('loadCategories')
    }
    this.category = this.options[0]
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.input_style{
  width: 200px;
}
.select {
  width: 200px;
}
</style>
