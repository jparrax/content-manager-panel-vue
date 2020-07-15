<template>
  <b-container id="this-container">
    <b-row>
      <b-col>
        <b-card class="mt-3" :header="title">
          <b-form @submit="updateFooter">
            <b-form-group id="input-group-email" label="Email" label-for="input-email">
              <b-form-input id="input-email" type="email" v-model="footerInfo.info.email" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-address" label="Address" label-for="input-address">
              <b-form-input id="input-address" v-model="footerInfo.info.address" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-mobile" label="Mobile" label-for="input-mobile">
              <b-form-input id="input-mobile" v-model="footerInfo.info.mobile" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-facebook" label="Facebook" label-for="input-facebook">
              <b-form-input id="input-facebook" v-model="footerInfo.links.facebook" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-instagram" label="Instagram" label-for="input-instagram">
              <b-form-input id="input-instagram" v-model="footerInfo.links.instagram" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-twitter" label="Twitter" label-for="input-twitter">
              <b-form-input id="input-twitter" v-model="footerInfo.links.twitter" required></b-form-input>
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
import axios from "axios";

export default {
  data() {
    return {
      title: 'Footer Information',
      id: '',
      footerInfo: {
        info: {
          address: '',
          email: '',
          mobile: '',
        },
        links: {
          facebook: '',
          instagram: '',
          twitter: '',
        },
      },
      message: '',
      showMessage: false,
    };
  },
  methods: {
    getFooterInfo() {
      const endpoint = "http://localhost:5000/footer";
      axios
        .get(endpoint)
        .then(res => {
          this.id = res.data._id.$oid;
          this.footerInfo.info = res.data.info;
          this.footerInfo.links = res.data.links;
          console.log('ObjectID: ' + this.id);
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateFooter(e) {
      e.preventDefault();
      const endpoint= `http://localhost:5000/footer/${this.id}`;
      axios
        .put(endpoint, this.footerInfo)
        .then(() => {
          this.getFooterInfo();
          this.message = 'Footer Updated';
          this.showMessage = true;
        })
        .catch((error) => {
          console.error(error);
          this.getFooterInfo();
        });
    },
  },
  created() {
    this.getFooterInfo();
  },
};
</script>