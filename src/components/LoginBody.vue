<template>
    <div class = "position-auxiliar">
        <b-container class= "my-container">
            <b-row class= "header">
                <b-col>
                    Login Form
                </b-col>
            </b-row>
            <br>
            <b-row class= "body">
                <br>
                <b-col>
                    <b-container class= "login-container">
                        <b-row>
                            <b-col cols="4">
                                Username
                            </b-col>
                            <b-col cols="8">
                                <b-form-input v-model="username" placeholder="Enter your name"></b-form-input>
                            </b-col>
                        </b-row>
                        <br>
                        <b-row>
                            <b-col cols="4">
                                Password
                            </b-col>
                            <b-col  cols="8">
                                <b-form-input type="password" v-model="password" placeholder="Enter your password"></b-form-input>
                            </b-col>
                        </b-row>
                        <br>
                        <b-row>
                            <b-col class= "login-button">
                                <b-button class="inner-login-button" @click="logIn">Login</b-button>
                            </b-col>
                        </b-row>
                        <br>
                    </b-container>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import { bus } from '../main.js'
export default {
  data () {
    return {
        username: "",
        password: ""
    }
  },
  methods: {
    logIn: function () {
        if(this.username == "kerry" && this.password == "*A1m5Z9*"){
            bus.$emit('logIn')
        }else{
            alert("Username or Password not found!");
        }
    }
  }
}
</script>
<style scoped>
    .position-auxiliar{
        padding-top: 10%;
        min-height: 41vw;
    }
    .my-container{
        text-align: center;
        margin: 0% 0% 10.5% 35%;
        padding: 0%;
        color: black;
        position: relative;
        left: 0;
        top: 50%;
        width: 400px;
        background: rgba(255, 255, 255, 0.2);
    }
    .header{
        background-color: #E9ECEA;
        margin: 0%;
        padding: 1%;
        width: 400px;
        color: black;
        text-align: left;
        font-weight: bold;
    }
    .body{
        width: 400px;
        font-weight: bold;
    }
    .login-container{
        opacity: 100%;
    }
    .login-button{
        text-align: right;
    }
    .inner-login-button{
        background-color: #E9ECEA;
        border-color: rgba(255, 255, 255, 0.3);
        font-weight: bold;
        border-color: transparent;
        color: black;
        box-shadow: 2px 2px 8px black;
        font-weight: bold;
    }
</style>
