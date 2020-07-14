<template>
  <b-container>

    <b-row v-for="tab in object.data" :key="tab">
      <b-col>
        <b-card class="mt-3">
            <template v-slot:header>
              <p class="mb-0 font-weight-bold">{{ tab.title }}</p>
            </template>
            <b-form :name="tab.title" @submit="onSubmit">

              <!-- Tab info -->
              <b-form-group
                label="Title:"
              >
                <b-form-input
                  :id="'title-' + tab.title"
                  type="text"
                  v-model="tab.title"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Width:"
              >
                <b-form-input
                  :id="'widht-' + tab.title"
                  type="text"
                  v-model="tab.width"
                ></b-form-input>
              </b-form-group>

              <!-- Cards -->
              <b-row v-for="card in tab.cards" :key="card">
                <b-col>
                  <b-card class="mt-3" :header="card.title" header-bg-variant="primary" header-text-variant="white">
                      <b-form @submit="onSubmit">

                        <b-form-group
                          label="Title:"
                        >
                          <b-form-input
                            :class="'card-title-' + tab.title"
                            type="text"
                            v-model="card.title"
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Text:" label-for="input-2">
                          <b-form-textarea
                            :class="'card-content-' + tab.title"
                            rows="6"
                            v-model="card.content"
                          ></b-form-textarea>
                        </b-form-group>

                    </b-form>
                  </b-card>
                </b-col>
              </b-row>

              <!-- Button -->
              <b-button 
                class="mt-2" 
                :id="tab.title" 
                variant="primary" 
                @click="getFormElements"
                >
                Submit
              </b-button>

          </b-form>
        </b-card>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        object:""
      }
    },
    methods: {
      getHomeInfo() {
        const endpoint = 'http://localhost:5000/where';
        axios.get(endpoint)
          .then((res) => {
            this.object = res;
            console.log(res);
          })
          .catch((error) => {
            console.error(error);
          });
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      getFormElements() {
        let event = window.event;
        let inputElements = document.forms[event.target.getAttribute("id")].getElementsByTagName("input");
        let textAreaElements = document.forms[event.target.getAttribute("id")].getElementsByTagName("textarea");
        let input;
        let textArea;
        for(input in inputElements){
          console.log(inputElements[input].value)
        }
        for(textArea in textAreaElements)
        console.log(textAreaElements[textArea].value);
      }
    },
    created() {
      this.getHomeInfo();
    }
  }
</script>
