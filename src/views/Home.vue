<template>
  <div class="home">
      <router-view></router-view>
      <tab-bar></tab-bar>
      <one-tab></one-tab>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue';
import OneTab from '@/components/OneTab.vue';

export default {
  components: {
    TabBar,
    OneTab,
  },
};
</script>

<style>

</style>
