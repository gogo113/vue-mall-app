<template>
  <div class="classify-wrapper">
      <div class="search-btn">
        <van-icon name="search" />
        <div>苹果特价1元一斤</div>
      </div>
      <one-tab></one-tab>
      <template v-if="showContent">
        <side-bar></side-bar>
        <goods-list></goods-list>>
      </template>
      <van-loading size="2rem" vertical v-else />
  </div>
</template>

<script>
import OneTab from '@/components/OneTab.vue';
import SideBar from '@/components/SideBar.vue';
import GoodsList from '@/components/GoodsList.vue';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      showContent: (state) => state.showContent,
    }),
  },
  components: {
    OneTab,
    SideBar,
    GoodsList,
  },
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
