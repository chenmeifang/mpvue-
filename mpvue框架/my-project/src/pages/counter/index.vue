<template>
  <div>
    <!-- <i-input placeholder="id" title="id："/> -->
    <i-input placeholder="studentNumber" title="学号："/>
    <i-input placeholder="detail" title="详情："/>
    <i-input placeholder="price" title="价格："/>
    <i-button shape="circle" bind:click="handleClick">发布</i-button>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  data () {
    return {
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    handleClick () {

    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
