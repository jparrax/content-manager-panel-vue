<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card 
          :header="title"
          class="mt-3"
          header-bg-variant="primary"
          border-variant="primary"
        >
          <b-form @submit="getAboutUsInfo">
            
            <b-form-group id="input-group-card1" label="Main Header" label-for="input-card1">
              <b-form-input id="input-card1" v-model="aboutUsInfo.card_1.title" required></b-form-input>
            </b-form-group>
            <b-row v-for="(card_text, index) in aboutUsInfo.card_1.texts" :key="index">
              <b-col>
                <b-form-group>
                  <b-form-input v-model="card_text.value">
                    {{ card_text }}
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

              <div>
                <b-alert variant="success" :show="showMessage" @dismissed="showMessage=false" dismissible>{{ message }}</b-alert>
              </div>
              <b-button type="submit" variant="primary">Save</b-button>
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
      title: 'About Us Admin',
      id: '',
      aboutUsInfo: {
        card_1: {
          title: 'First title',
          texts: [
            {i: 1, value: 'A'},
            {i: 2, value: 'B'},
            {i: 3, value: 'C'},
          ]
        },
        card_2: {
          title: '',
          texts: []
        },
        card_3: {
          title: '',
          texts: []
        },
        banner: {
          title: '',
          texts: []
        },
        timelines: []
      },
      message: '',
      showMessage: false,
    };
  },
  methods: {
    getAboutUsInfo() {
      const endpoint = 'http://localhost:5000/about_us';
      axios
        .get(endpoint)
        .then((res) => {
          this.id = res.data._id.$oid;
          this.aboutUsInfo.card_1 = res.data.card_1;
          this.aboutUsInfo.card_2 = res.data.card_2;
          this.aboutUsInfo.card_3 = res.data.card_3;
          this.aboutUsInfo.banner = res.data.banner;
          this.aboutUsInfo.timelines = res.data.timelines;
          console.log('ObjectID: ' + this.id);
        })
        .catch(error=> {
          console.error(error);
        });
    },
    updateAboutUs(e) {
      e.preventDefault();
    }
  }
}
</script>