<template>

<div class="wrapper">
  <div>Total: {{gFPV}}</div>
  <div class="data_form">
    <span class="data_item">#</span>
    <span class="data_item">Data</span>
    <span class="data_item">Type</span>
    <span class="data_item">Value</span>
  </div>
  <div class="item" v-for="item in items" :key="item.id">
    <div class="data_form">
      <div class="data_item">{{item.id}}</div>
      <div class="data_item">{{item.date}}</div>
      <div class="data_item">{{item.category}}</div>
      <div class="data_item">{{item.value}}</div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name:"paymentsDisplay",
  components: {
  },
  computed: {
  },
  props: {
    items: {
      type: Array,
      default: ()=>[],
    },
    pageNumber: {
      type: Number
    },
    size: {
      type: Number,
      required: false,
      default: 3
    }
  },
}
</script>

<style  scoped>
.data_form{
  display: flex;
  padding: 20px 20px 20px 50px;
}
.data_item{
  width: 120px;
  text-align: left;
}


</style>