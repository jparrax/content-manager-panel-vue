<template>
  <div>
    <b-row v-if="isVisible">
      
      <b-col>
        <b-card class="mt-3" :header="card_title">
          <b-form-group
            label="Title:"
          >
            <b-form-input
              type="text"
              v-model="card_title"
              :class="title"
              >
              </b-form-input>
          </b-form-group>

          <b-form-group 
            label="Description:">
            <b-form-textarea
              rows="6"
              :class="title"
              >
              </b-form-textarea>
          </b-form-group>
          
          <b-form-group
            label="Image 1:"
          >
            <b-form-input
              type="text"
              :class="title"
              >
              </b-form-input>
          </b-form-group>

          <b-form-file class="img mt-3 mb-3" accept=".jpg" plain></b-form-file>

          <b-form-group
            label="Image 2:"
          >
            <b-form-input
              type="text"
              :class="title"
              >
              </b-form-input>
          </b-form-group>

          <b-form-file class="img mt-3" accept=".jpg" plain></b-form-file>

        </b-card>
      </b-col>

      

    </b-row>
    <b-row class="ml-1 mt-2">
      <b-col>
        <b-button variant="warning" @click="addCard">Add</b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {
      isVisible: false,
      card_title: ""       
    }
  },
  methods:{
    addCard(){
      let event = window.event;
      if(this.isVisible == false){
        this.isVisible = true;
        event.target.innerHTML = "Discard";
      }else{
        this.isVisible = false;
        event.target.innerHTML = "Add"
      }
    }
  }
}
</script>