<template>
<div>
  <i-view v-for="item in details" :key="item">
    <i-card title=" " :extra="item.detail" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content"></view>
      <view slot="footer"></view>
    </i-card>
  </i-view> 
    <!-- <i-card title=" " extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
    <i-card title=" " extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
    <i-card title=" " extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
    <i-card title=" " extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card> -->
</div>  
</template>
<script>
export default {
  data () {
    return {
      details: []
    }
  },
  created () {
    /* 这里超级重要 */
    this.$fly.get('https://www.wjxweb.cn:789/Demand/all/1').then(response => {
      console.log(response.data.data)
      this.details = response.data.data
    })
    /* this.$fly.get('https://www.wjxweb.cn:789/Demand?id=2')
      .then((res) => {
        console.log(res)
        this.details = res.data.detail
      }) */
  }
}
</script>
<style scoped>

</style>


