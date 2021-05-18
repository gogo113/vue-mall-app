<template>
  <div class="classify-wrapper">
      <router-link class="search-btn" tag="div" to="/search">
        <van-icon name="search" />
        <div>苹果特价1元一斤</div>
      </router-link>
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
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      showContent: (state) => state.showContent,
      sideList: (state) => state.sideList,
    }),
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
  },
  components: {
    OneTab,
    SideBar,
    GoodsList,
  },
  watch: {
    showContent() {
      if (this.showContent) {
        this.resetGoodsList();
        this.getGoodsList({ type: this.sideList[0], page: 1, sortType: 'all' });
      }
    },
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
