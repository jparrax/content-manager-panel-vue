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
          <b-form @submit="updateAboutUs">
            
            <b-form-group id="input-group-card1" label="Section 1" label-for="input-card1">
              <b-form-input id="input-card1" v-model="aboutUsInfo.card_1.title" required></b-form-input>
            </b-form-group>
            <b-row>
              <b-col>
                <b-form-group>
                  <b-form-textarea
                    id="textarea-1"
                    v-model="aboutUsInfo.card_1.text"
                    rows="3"
                  >
                  </b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <b-form-group>
                  <b-form-textarea
                    id="textarea-2"
                    v-model="aboutUsInfo.card_2.text"
                    rows="3"
                  >
                  </b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <b-form-group>
                  <b-form-textarea
                    id="textarea-3"
                    v-model="aboutUsInfo.card_3.text"
                    rows="3"
                  >
                  </b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group id="input-group-card1" label="Banner" label-for="input-card1">
              <b-form-input id="input-card1" v-model="aboutUsInfo.banner.title" required></b-form-input>
            </b-form-group>
            <b-row>
              <b-col>
                <b-form-group>
                  <b-form-textarea
                    id="textarea-3"
                    v-model="aboutUsInfo.banner.text"
                    rows="3"
                  >
                  </b-form-textarea>
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
          title: '',
          texts: ''
        },
        card_2: {
          title: '',
          texts: ''
        },
        card_3: {
          title: '',
          texts: ''
        },
        banner: {
          title: '',
          texts: ''
        },
        timelines: []
      },
      message: '',
      showMessage: false
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

          this.aboutUsInfo.card_1.text = this.formatText(this.aboutUsInfo.card_1.text);
          this.aboutUsInfo.card_2.text = this.formatText(this.aboutUsInfo.card_2.text);
          this.aboutUsInfo.card_3.text = this.formatText(this.aboutUsInfo.card_3.text);
          this.aboutUsInfo.banner.text = this.formatText(this.aboutUsInfo.banner.text);
        })
        .catch(error=> {
          console.error(error);
        });
    },
    updateAboutUs(e) {
      e.preventDefault();
      this.aboutUsInfo.card_1.text = this.preformatText(this.aboutUsInfo.card_1.text);
      this.aboutUsInfo.card_2.text = this.preformatText(this.aboutUsInfo.card_2.text);
      this.aboutUsInfo.card_3.text = this.preformatText(this.aboutUsInfo.card_3.text);
      this.aboutUsInfo.banner.text = this.preformatText(this.aboutUsInfo.banner.text);
      console.log(JSON.stringify(this.aboutUsInfo, null, 2));
      
      const endpoint = `http://localhost:5000/about_us/${this.id}`;
      axios
        .put(endpoint, this.aboutUsInfo)
        .then(() => {
          this.getAboutUsInfo();
          this.message = 'About Us Information Updated';
          this.showMessage = true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    formatText(text) {
      return text ? text.replace(/\\n/g, '\n') : '';
    },
    preformatText(text) {
      return text ? text.replace(/\n/g, '\\n') : '';
    }
  },
  created() {
    this.getAboutUsInfo();
  },
}
</script>