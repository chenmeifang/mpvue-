<template>
  <div>
    <!-- current是当前标签所在的key值 key值是标识的唯一属性 -->
    <!-- 
      <i-tabs :current="current" @bindchange="handleChange" color="pink">
      这里的bind就是@
    -->
    <i-tabs :current="current" scroll @change="handleChange" color="pink" class='tabsclass'>
      <i-tab key="tab1" title="快递类"></i-tab> 
      <i-tab key="tab2" title="学习类"></i-tab>
      <i-tab key="tab3" title="拼单类"></i-tab>
      <i-tab key="tab4" title="旅游类"></i-tab>
      <i-tab key="tab5" title="资源类"></i-tab>
      <i-tab key="tab6" title="技术处理类"></i-tab>
      <i-tab key="tab7" title="其他"></i-tab>
    </i-tabs>
    <router-view>
      <parcle v-if="one"></parcle>
      <study v-if="two"></study>
      <pingdan v-if="three"></pingdan>
      <travel v-if="four"></travel>
      <resource v-if="five"></resource>
      <technology v-if="six"></technology>
      <others v-if="seven"></others>
    </router-view>
  </div>
</template>

<script>

import card from '@/components/card'
import parcle from '@/components/parcle'
import study from '@/components/study'
import pingdan from '@/components/pingdan'
import travel from '@/components/travel'
import resource from '@/components/resource'
import technology from '@/components/technology'
import others from '@/components/others'

export default {
  data () {
    return {
      current: 'tab1',
      one: true,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      tab1: 'tab1',
      tab2: 'tab2',
      tab3: 'tab3',
      tab4: 'tab4',
      tab5: 'tab5',
      tab6: 'tab6',
      tab7: 'tab7',
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card, parcle, study, pingdan, travel, resource, technology, others
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    /* 这里有个要注意的地方
       handleChange ({event})
    */
    handleChange (event) {
      // console.log(event.mp.detail.key)
      // console.log(event)
      this.current = event.mp.detail.key
      if (this.current === this.tab1) {
        this.one = true
        this.two = false
        this.three = false
        this.four = false
        this.five = false
        this.six = false
        this.seven = false
      }
      if (this.current === this.tab2) {
        this.one = false
        this.two = true
        this.three = false
        this.four = false
        this.five = false
        this.six = false
        this.seven = false
      }
      if (this.current === this.tab3) {
        this.one = false
        this.two = false
        this.three = true
        this.four = false
        this.five = false
        this.six = false
        this.seven = false
      }
      if (this.current === this.tab4) {
        this.one = false
        this.two = false
        this.three = false
        this.four = true
        this.five = false
        this.six = false
        this.seven = false
      }
      if (this.current === this.tab5) {
        this.one = false
        this.two = false
        this.three = false
        this.four = false
        this.five = true
        this.six = false
        this.seven = false
      }
      if (this.current === this.tab6) {
        this.one = false
        this.two = false
        this.three = false
        this.four = false
        this.five = false
        this.six = true
        this.seven = false
      }
      if (this.current === this.tab7) {
        this.one = false
        this.two = false
        this.three = false
        this.four = false
        this.five = false
        this.six = false
        this.seven = true
      }
      // console.log(this)
      // console.log(this.options.components.jinsai)
      /* this.setData({
        current: detail.key
      }) */
      /* 至于router，目前mpvue暂不支持，我在尝试后发现，插件注入什么的都没问题，
      唯独在组件内调用this.$router.push/replace时，得到的结果不很理想。 */
      // this.$router.replace('/src/components/jinsai.vue')
      /* wx.navigateTo({
        url: '/src/pages/logs/index.vue'
      }) */
      /* wx.navigateTo({
        url: 'pages/logs/main'
      }) */
      /* wx.navigateTo({
        url: '/src/components/jinsai.vue'
      }) */
      /* 开发的时候有时候会遇到一种情况，
      比如 ：点击这个链接跳转到其他组件的情况，
      通常会跳转到新的页面，蛋是，我们不想跳转到新页面，
      只在当前页面切换着显示，那么就要涉及到路由的嵌套了，也可以说是子路由的使用。 */
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
.tabsclass{
}
</style>
