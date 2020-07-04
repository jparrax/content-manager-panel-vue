<template>
    <div class = "my-navbar">
        <b-nav vertical class = "w-25" variant ="dark">
            <b-nav-item id= "item-1" class="nav-text" to="/home"><p>Home</p></b-nav-item>
            <b-nav-item id = "item-2" class="nav-text" to="/aboutus"><p>About us</p></b-nav-item>
            <b-nav-item id = "item-3" class="nav-text" to="/where"><p>Where are you going?</p></b-nav-item>
            <b-nav-item id = "item-4" class="nav-text" to="/understanding"><p>Understanding your style</p></b-nav-item>
            <b-nav-item id = "item-5" class="nav-text" to="/measurements"><p>Measurements</p></b-nav-item>
            <b-nav-item id = "item-6" class="nav-text" to="/contactus"><p>Contact us</p></b-nav-item>
            <p class = "copyrights">©2020 Elizabeth By Design</p>
        </b-nav>
    </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
 
  }
}
</script>
<style>
    .my-navbar{
        margin: 0%;
        padding: 0%;
        height: 100%;
        width: 100%;
        background-color: #E9ECEA;
        position: static;
    }
    #item-1{
        position: absolute;
        top: 20px;
        font-size: 100%;
        text-align: left;
    }
    #item-2{
        position: absolute;
        top: 80px;
        font-size: 100%;
        text-align: left;
    }
    #item-3{
        position: absolute;
        top: 140px;
        font-size: 100%;
        text-align: left;
    }
    #item-4{
        position: absolute;
        top: 200px;
        font-size: 100%;
        text-align: left;
    }
    #item-5{
        position: absolute;
        top: 260px;
        font-size: 100%;
        text-align: left;
    }
    #item-6{
        position: absolute;
        top: 320px;
        font-size: 100%;
        text-align: left;
    }
    .copyrights{
        position: absolute;
        top: 95%;
        left: 30px;
        font-size: 80%;
        margin: 0%;
        padding: 0%;
    }
    p{
        color: black;
    }
    .router-link-active{
        font-weight: bold;
    }
    .invisible{
        visibility: hidden;
    }
    .active{
        font-weight: bold;
    }
</style>
