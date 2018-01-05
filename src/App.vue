<template>
  <div id="app">
    <m-header></m-header>
    <header-tab></header-tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header.vue'
import HeaderTab from 'components/tab/tab'

export default {
    components: {
      MHeader,
      HeaderTab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
