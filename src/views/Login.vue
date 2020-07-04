<template>
    <b-container fluid class="view-container">
      <!-- <Header/> -->
      <LoginBody/>
      <Footer/>
    </b-container>
</template>

<script>
// import { bus } from '../main.js'
// import Header from '@/components/Header.vue'
import LoginBody from '@/components/LoginBody.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    // Header,
    LoginBody,
    Footer
  }
}
</script>>
<style scoped>
  .view-container{
    background-image: url("../assets/home1.jpg");
    background-size: 100%;
  }
</style>
