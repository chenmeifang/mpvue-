<template>
<div>
    <i-card title="卡片标题" :extra="details" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错啦啦啦啦啦啦啦</view>
      <view slot="footer">尾部内容啦啦啦啦啦啦啦啦啦</view>
    </i-card>
    <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
    <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
    <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
    <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
</div>  
</template>
<script>
export default {
  data () {
    return {
      details: ''
    }
  },
  created () {
    /* 这里超级重要 */
    this.$fly.get('https://www.wjxweb.cn:789/Demand?id=2').then(response => {
      console.log(response.data.detail)
      this.details = response.data.detail
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


