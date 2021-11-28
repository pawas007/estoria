<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
          </li>

<!--          <li class="nav-item" :class="{active: this.$route.name === 'home'}">-->
<!--            <router-link :to="{name:'home'}" class="nav-link">Home</router-link>-->
<!--          </li>-->

          <li class="nav-item">
            <router-link :to="{name:'catalog'}" class="nav-link">Catalog</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name:'todo'}" class="nav-link">To do</router-link>
          </li>



        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "main-header",
  components: {},
}
</script>

<style scoped lang="scss">
.router-link-exact-active{
  color: black !important;
}

</style>