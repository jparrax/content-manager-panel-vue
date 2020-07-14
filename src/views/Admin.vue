<template>
  <b-container fluid>
    <!-- <HeaderAdmin/> -->
    <b-row>
      <b-col cols="2" id="my-navbar" class="my-container"><NavBarAdmin/></b-col>
      <b-col cols="10" id="my-scrollable" class="my-container scrollable"><router-view/></b-col>
    </b-row>
  </b-container>
</template>
<script>
// import HeaderAdmin from '../components/HeaderAdmin.vue';
import NavBarAdmin from '../components/NavBarAdmin.vue';
// import { bus } from '../main.js'
export default {
  components: {
    // HeaderAdmin,
    NavBarAdmin
  }
}
</script>
<style>
  #my-scrollable{
    margin: 0%;
    padding: 0%;
  }
  #my-navbar{
    margin: 0%;
    padding: 0%;
  }
  .scrollable{
    height: 825px;
    overflow: auto;
  }
</style>
