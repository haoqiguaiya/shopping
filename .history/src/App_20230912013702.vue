<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  beforeCreate: function () {
    this.$options.components.TreeFolderContents = require('@/views/layout/index.vue').default
}
</script>

<style lang="less">

</style>
