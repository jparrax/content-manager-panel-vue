<template>
  <b-row v-if="isVisible">
    <b-col>
      <b-card class="mt-3" :header="card.title">
        <b-form-group
          label="Title:"
        >
          <b-form-input
            :class="title"
            type="text"
            v-model="card.title">
            </b-form-input>
        </b-form-group>

        <b-form-group 
          label="Description:">
          <b-form-textarea
            :class="title"
            rows="6"
            :value="card.content">
            </b-form-textarea>
        </b-form-group>
        
        <b-form-group
          label="Image 1:"
        >
          <b-form-input
            :class="title"
            type="text"
            :value="card.img1"
            >
            </b-form-input>
        </b-form-group>

        <b-form-file class="img mt-3 mb-3" accept=".jpg" plain></b-form-file>

        <b-form-group
          label="Image 2:"
        >
          <b-form-input
            :class="title"
            type="text"
            :value="card.img2"
            >
            </b-form-input>
        </b-form-group>

        <b-form-file class="img mt-3" accept=".jpg" plain></b-form-file>

        <b-button class="mt-3" variant="danger" @click="deleteCard">Delete</b-button>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: ['card','title'],
  data() {
    return {
      isVisible: true,
    }
  },
  methods:{
    deleteCard(){
      this.isVisible = false;
    }
  }
}
</script>