<template>
  <div class="wrapper">
    <input class="input_style" placeholder="Payment amount" v-model="value" />
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
    getHour(){
      const nowHour = new Date()
      const h = nowHour.getMilliseconds()
      return h
    }
  },
  methods: {
    onSaveClick(){
      const data = {
          id: this.getHour,
          value: +this.value,
          category: this.category,
          date: this.date || this.getCurrentDate,
        };
      this.$emit('add', data)
      console.log(data)
    }
    }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.input_style{
  margin: 5px;
  width: 200px;
}

</style>