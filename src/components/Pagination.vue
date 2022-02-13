
<template>
<div class="wrapper">
  <div class="button" @click="OnClick(cur-1)">-</div>
  <div class="button" v-for="i in amount" :key="i"  :class = "{'active': cur === i}" @click="onClick(i)">
    {{i}}
  </div>
  <div class="button" @click="OnClick(cur+1)">+</div>
</div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    cur: Number,
    n: Number
  },
  computed:{
    amount(){
      return Math.ceil(this.length / this.n)
    }
  },
  methods:{
    onClick(page){
      if (page <1 || page > this.amount || page === this.cur){
        return
      }
      this.$emit('paginate',page)
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  align-items: center;
  margin: 20px auto auto 50px;
}
.button {
  padding: 10px;
}
.button.active {
  background: cornflowerblue;
}
</style>