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
          <b-form @submit="updateStyle">
            
            <b-form-group id="input-group-intro" label="Intro Fieldset" label-for="input-intro">
              <b-form-input id="input-intro" v-model="styleInfo.introFieldset.title" required></b-form-input>
            </b-form-group>
            <b-row>
              <b-col>
                <b-form-group>
                  <b-form-textarea
                    id="textarea-1"
                    v-model="styleInfo.introFieldset.text"
                    rows="3"
                  >
                  </b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group id="input-group-step1" label="Step 1" label-for="textarea-step1">
              <b-row>
                <b-col>
                  <b-form-group>
                    <b-form-textarea
                      id="textarea-step1"
                      v-model="styleInfo.styleSteps.stepOne"
                      rows="3"
                    >
                    </b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group id="input-group-step2" label="Step 2" label-for="textarea-step2">
              <b-row>
                <b-col>
                  <b-form-group>
                    <b-form-textarea
                      id="textarea-step2"
                      v-model="styleInfo.styleSteps.stepTwo"
                      rows="3"
                    >
                    </b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group id="input-group-step3" label="Step 3" label-for="textarea-step3">
              <b-row>
                <b-col>
                  <b-form-group>
                    <b-form-textarea
                      id="textarea-step3"
                      v-model="styleInfo.styleSteps.stepThree"
                      rows="3"
                    >
                    </b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group id="input-group-step4" label="Step 4" label-for="textarea-step4">
              <b-row>
                <b-col>
                  <b-form-group>
                    <b-form-textarea
                      id="textarea-4"
                      v-model="styleInfo.styleSteps.stepFour"
                      rows="3"
                    >
                    </b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group id="input-group-step5" label="Step 5" label-for="input-step5">
              <b-row>
                <b-col>
                  <b-form-group>
                    <b-form-textarea
                      id="textarea-5"
                      v-model="styleInfo.styleSteps.stepFive"
                      rows="3"
                    >
                    </b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group id="input-group-gettingIntro" label="Getting Started Intro" label-for="input-gettingIntro">
              <b-form-input id="input-gettingIntro" v-model="styleInfo.gettingStartedIntro.title" required></b-form-input>
            </b-form-group>
            <b-row>
              <b-col>
                <b-form-group>  
                  <b-form-textarea
                    id="textarea-5"
                    v-model="styleInfo.gettingStartedIntro.text"
                    rows="3"
                  >
                  </b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group id="input-group-gettingSteps" label="Getting Started Steps" label-for="input-gettingSteps">
              <b-form-input id="input-gettingSteps" v-model="styleInfo.gettingStartedSteps.title" required></b-form-input>
            </b-form-group>
            <b-row>
              <b-col>
                <b-form-group>  
                  <b-form-textarea
                    id="textarea-5"
                    v-model="styleInfo.gettingStartedSteps.text"
                    rows="3"
                  >
                  </b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>

            <b-form-group id="input-group-gettingQuestions" label="Getting Started Questions" label-for="input-gettingQuestions">
              <b-form-input id="input-gettingQuestions" v-model="styleInfo.gettingStartedQuestions.title" required></b-form-input>
            </b-form-group>
            <b-row>
              <b-col>
                <b-form-group>  
                  <b-form-textarea
                    id="textarea-5"
                    v-model="styleInfo.gettingStartedQuestions.text"
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
      title: 'Understanding Your Style',
      id: '',
      styleInfo: {
        introFieldset: {
          title: '',
          text: '',
        },
        styleSteps: {},
        gettingStartedIntro: {
          title: '',
          text: '',
        },
        gettingStartedSteps: {
          title: '',
          text: '',
        },
        gettingStartedQuestions: {
          title: '',
          text: '',
        }
      },
      message: '',
      showMessage: false,
    };
  },
  methods: {
    getStyleInfo() {
      const endpoint = 'http://localhost:5000/style';
      axios
        .get(endpoint)
        .then((res) => {
          console.log(res.data.introFieldset);
          this.id = res.data._id.$oid;
          this.styleInfo.introFieldset = res.data.introFieldset;
          this.styleInfo.styleSteps = res.data.styleSteps;
          this.styleInfo.gettingStartedIntro = res.data.gettingStartedIntro;
          this.styleInfo.gettingStartedSteps = res.data.gettingStartedSteps;
          this.styleInfo.gettingStartedQuestions = res.data.gettingStartedQuestions;

          this.styleInfo.introFieldset.text = this.formatText(this.styleInfo.introFieldset.text);
          this.styleInfo.gettingStartedIntro.text = this.formatText(this.styleInfo.gettingStartedIntro.text);
          this.styleInfo.gettingStartedSteps.text = this.formatText(this.styleInfo.gettingStartedSteps.text);
          this.styleInfo.gettingStartedQuestions.text = this.formatText(this.styleInfo.gettingStartedQuestions.text);
        })
        .catch(error=> {
          console.error(error);
        });
    },
    updateStyle(e) {
      e.preventDefault();
      console.log(JSON.stringify(this.styleInfo, null, 2));
      this.styleInfo.introFieldset.text = this.preformatText(this.styleInfo.introFieldset.text);
      this.styleInfo.gettingStartedIntro.text = this.preformatText(this.styleInfo.gettingStartedIntro.text);
      this.styleInfo.gettingStartedSteps.text = this.preformatText(this.styleInfo.gettingStartedSteps.text);
      this.styleInfo.gettingStartedQuestions.text = this.preformatText(this.styleInfo.gettingStartedQuestions.text);

      const endpoint = `http://localhost:5000/style/${this.id}`;
      axios
        .put(endpoint, this.styleInfo)
        .then(() => {
          this.getStyleInfo();
          this.message = 'Understanding your Style Information Updated';
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
    this.getStyleInfo();
  }
};
</script>