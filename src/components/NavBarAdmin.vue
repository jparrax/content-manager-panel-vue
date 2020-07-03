<template>
    <div class = "my-navbar">
        <b-nav vertical class = "w-25" variant ="dark">
            <b-nav-item id= "item-1" class="nav-text" to="/RawMaterial" @click = "reportsInvisible"><p>Manage and view raw material stock</p></b-nav-item>
            <b-nav-item id = "item-2" class="nav-text" to="/CosmeticFormula" @click = "reportsInvisible"><p>Cosmetic formula</p></b-nav-item>
            <b-nav-item id = "item-3" class="nav-text" to="/InventoryReport" :class = "{active: isActive}" @click = "reportsVisible"><p>Reports</p></b-nav-item>
            <b-nav-item id = "item-4" class="nav-text item-3" to="/InventoryReport" :class = "{invisible: hideReport}"><p>Inventory report</p></b-nav-item>
            <b-nav-item id = "item-5" class="nav-text item-3" to="/UsageReport" :class = "{invisible: hideReport}"><p>Usage report</p></b-nav-item>
            <b-nav-item id = "item-6" class="nav-text item-3" to="/CosmeticFormulaReport" :class = "{invisible: hideReport}"><p>Cosmetic formula report</p></b-nav-item>
            <p class = "copyrights"> ©2020 Elizabeth By Design</p>
        </b-nav>
    </div>
</template>
<script>
export default {
  data () {
    return {
      hideReport: true,
      isActive: false
    }
  },
  methods: {
    reportsVisible: function () {
      this.hideReport = false
      this.isActive = true
    },
    reportsInvisible: function () {
      this.hideReport = true
      this.isActive = false
    }
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
        top: 110px;
        font-size: 100%;
        text-align: left;
    }
     #item-3{
        position: absolute;
        top: 170px;
        font-size: 100%;
        text-align: left;
    }
    #item-4{
        position: absolute;
        top: 205px;
        font-size: 90%;
        text-align: left;
    }
    #item-5{
        position: absolute;
        top: 235px;
        font-size: 90%;
        text-align: left;
    }
    #item-6{
        position: absolute;
        top: 265px;
        font-size: 90%;
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
