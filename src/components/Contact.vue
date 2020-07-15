<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card class="mt-3" :header="title">
          <b-form @submit="updateContactUs">
            <b-form-group id="input-group-mainheader" label="Main Header" label-for="input-mainheader">
              <b-form-input id="input-mainheader" v-model="contactInfo.header" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-subheader" label="Main Header Text" label-for="input-subheader">
              <b-form-input id="input-subheader" v-model="contactInfo.subheader" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-keepheader" label="Keep in Touch header" label-for="input-keepheader">
              <b-form-input id="input-keepheader" v-model="contactInfo.keepInTouch.header" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-keepsubheader" label="Keep in Touch subtext" label-for="input-keepsubheader">
              <b-form-input id="input-keepsubheader" v-model="contactInfo.keepInTouch.subheading" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-calendly" label="Calendly URL" label-for="input-calendly">
              <b-form-input id="input-calendly" v-model="contactInfo.calendlyApi" required></b-form-input>
            </b-form-group>

            <div>
              <b-alert variant="success" :show="showMessage" @dismissed="showMessage=false" dismissible>{{ message }}</b-alert>
            </div>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: 'Contact Us Page',
      id: '',
      contactInfo: {
        header: '',
        subheader: '',
        calendlyApi: '',
        keepInTouch: {
          header: '',
          subheading: '',
        },
      },
      message: '',
      showMessage: false,
    };
  },
  methods: {
    getContactUsInfo() {
      const endpoint = "http://localhost:5000/contact_us";
      axios
        .get(endpoint)
        .then(res => {
          this.id = res.data._id.$oid;
          this.contactInfo.header = res.data.header;
          this.contactInfo.subheader = res.data.subheader;
          this.contactInfo.calendlyApi = res.data.calendlyApi;
          this.contactInfo.keepInTouch = res.data.keepInTouch;
          console.log('ObjectID: ' + this.id);
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateContactUs(e) {
      e.preventDefault();
      const endpoint = `http://localhost:5000/contact_us/${this.id}`;
      axios
        .put(endpoint, this.contactInfo)
        .then(() => {
          this.getContactUsInfo();
          this.message = 'Footer Updated';
          this.showMessage = true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getContactUsInfo();
  }
}
</script>