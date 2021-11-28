<template>
  <div id="app">
<main-header/>
    <router-view></router-view>




  </div>
</template>

<script>


import MainHeader from "@/components/main-header";
export default {
  name: 'App',
  components: {
    MainHeader

  }
}
</script>

<style lang="scss">

</style>
