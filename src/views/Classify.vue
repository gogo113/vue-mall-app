<template>
  <div class="classify-wrapper">
      <div class="search-btn">
        <van-icon name="search" />
        <div>苹果特价1元一斤</div>
      </div>
  </div>
</template>

<script>
export default {

};
</script>
<style lang="less" scoped>
  .classify-wrapper{
    width: 375px;
    .search-btn{
      width: 355px;
      height: 33px;
      line-height: 33px;
      background: #eee;
      color: #a1a1a1;
      margin: 11px auto 0;
      border-radius: 10px;
      font-size: 14px;
      text-align: center;
      >* {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
</style>
