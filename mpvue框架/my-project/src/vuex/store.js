import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/* 每一个 Vuex 应用的核心就是 store（仓库）。
   “store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。
   Vuex 和单纯的全局对象有以下两点不同：
     1.Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，
       若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
     2.你不能直接改变 store 中的状态。
       改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
       这样使得我们可以方便地跟踪每一个状态的变化，
       从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

   现在，你可以通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更
   由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。
   触发变化也仅仅是在组件的 methods 中提交 mutation。

   Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。
   至此它便作为一个“唯一数据源 (SSOT)”而存在。
   这也意味着，每个应用将仅仅包含一个 store 实例。

   单状态树和模块化并不冲突——在后面的章节里我们会讨论如何将状态和状态变更事件分布到各个子模块中。

   在 Vue 组件中获得 Vuex 状态:
    由于 Vuex 的状态存储是响应式的，
    从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态：

   Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）：
    */
const store = new Vuex.Store({
  state: {
    userInformation: {}
  },
  mutation: {
    getUserInformation (state, data) {
      // 这里不太懂
      state.userInformation = data
      // data = state.userInformation
    }
  }
})

export default store
