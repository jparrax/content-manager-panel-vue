<template>
  <b-container id="this-container">
    <b-row>
      <b-col>
        <b-card class="mt-3" :header="title">
          <b-form @submit="onSubmit">
            <b-form-group id="input-group-email" label="Email" label-for="input-email">
              <b-form-input id="input-email" type="email" value="email@email.com" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Address" label-for="input-address">
              <b-form-input id="input-address" value="Auckland, New Zealand" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Mobile" label-for="input-mobile">
              <b-form-input id="input-mobile" value="022 123 1234" required></b-form-input>
            </b-form-group>

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
      title: "Footer Information"
    };
  },
  methods: {
    getFooterInfo() {
      const endpoint = "http://localhost:5000/footer";
      axios
        .get(endpoint)
        .then(res => {
          console.log(res);
          // this.info.address = res.data.info.address;
          // this.info.email = res.data.info.email;
          // this.info.mobile = res.data.info.mobile;
          // this.links.facebook = res.data.links.facebook;
          // this.links.instagram = res.data.links.instagram;
          // this.links.twitter = res.data.links.twitter;
        })
        .catch(error => {
          console.error(error);
        });
    },
    onSubmit() {
      // do onsubmit
    }
  },
  created() {
    this.getFooterInfo();
  }
};
</script>