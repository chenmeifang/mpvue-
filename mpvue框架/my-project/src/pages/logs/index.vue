<template>
  <div>
    <!-- 怎么才能让头像居中 -->
    <view class="touxiang">
      <!-- <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"></i-avatar> -->
           <i-avatar :src="user.avatarUrl" size="large"></i-avatar>
    </view>  
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },
  /* computed用来监控自己定义的变量，该变量不在data里面声明，
     直接在computed里面定义，然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理； */
  computed: {
    user () {
      return this.$store.state.userInformation
    }
  },
  data () {
    return {
      logs: [],
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
      ]
    }
  },

  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}

/* .touxiang{
  align-content: center
} */
</style>
