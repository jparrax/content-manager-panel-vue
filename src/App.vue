<template>
  <div id="app">
    <HeaderAdmin/>
    <login v-if="isLoginActive"/>
    <admin v-if="isAdminActive"/>
  </div>
</template>

<script>
  import HeaderAdmin from '@/components/HeaderAdmin.vue';
  import Login from '@/views/Login.vue';
  import Admin from '@/views/Admin.vue';
  import { bus } from './main.js';
  export default {
    data () {
      return{
        isLoginActive: true,
        isAdminActive: false
      }
    },
    components: {
      HeaderAdmin,
      login: Login,
      admin: Admin
    },
    created () {
      bus.$on('logIn', (data) => {
        this.isAdminActive = true
        this.isLoginActive = false
      })
      bus.$on('logOut', (data) => {
        this.isAdminActive = false
        this.isLoginActive = true
      })
    }
  };
</script>

<style>
  #app{
    overflow:hidden;
  }
  .container-fluid{
    padding: 0%;
  }
</style>
