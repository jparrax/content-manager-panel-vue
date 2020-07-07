<template>
    <b-row class = "header">
        <b-col class = "left">
            <img src="../assets/logo-final-v2.png">
        </b-col>
        <b-col class = "right">
            <b-button id = "my-button" v-show = isLogOutActive @click="logOut">Logout</b-button>
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
    #my-button{
      position: absolute;
      top: 20%;
      right: 5%;
      border-color: transparent;
      color: black;
      box-shadow: 2px 2px 8px black;
      background-color: #E9ECEA;
      font-weight: bold;
    }
</style>
