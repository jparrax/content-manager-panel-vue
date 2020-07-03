<template>
    <b-row class = "header">
        <b-col class = "left">
            <img  src="..\assets\logo-final-v2.png">
        </b-col>
        <b-col class = "right">
            <b-button variant="light" v-show = isLogOutActive @click="logOut">Logout</b-button>
        </b-col>
    </b-row>
</template>
<script>
import { bus } from '../main.js'
export default {
  data () {
    return {
      isLogOutActive: false
    }
  },
  methods: {
    logOut: function () {
      bus.$emit('logOut')
      this.isLogOutActive = false
    }
  },
  created () {
    bus.$on('logIn', (data) => {
      this.isLogOutActive = true
    })
  }
}
</script>
<style scoped>
    .header{
        padding: 1%;
        background-color:#E9ECEA;
    }
    .left{
        text-align: left;
    }
    .right{
        text-align: right;
    }
    img{
        width: 200px;
    }
</style>
