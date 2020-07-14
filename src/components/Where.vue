<template>
  <b-container>

    <b-row v-for="tab in object.data" :key="tab">
      <b-col>
        <b-card class="mt-3" header-bg-variant="primary">
            <template v-slot:header>
              <p class="mb-0 font-weight-bold">{{ tab.title }}</p>
            </template>
            <b-form :name="tab.title" @submit="onSubmit">

              <!-- Tab info -->
              <b-form-group
                label="Title:"
              >
                <b-form-input
                  :class="tab.title"
                  type="text"
                  v-model="tab.title"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Width:"
              >
                <b-form-input
                  :class="tab.title"
                  type="text"
                  v-model="tab.width"
                ></b-form-input>
              </b-form-group>

              <!-- Cards -->
              <b-row v-for="card in tab.cards" :key="card">
                <b-col>
                  <b-card class="mt-3" :header="card.title">
                    <b-form-group
                      label="Title:"
                    >
                      <b-form-input
                        :class="tab.title"
                        type="text"
                        v-model="card.title">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group 
                      label="Text:">
                      <b-form-textarea
                        :class="tab.title"
                        rows="6"
                        v-model="card.content">
                        </b-form-textarea>
                    </b-form-group>
                  </b-card>
                </b-col>
              </b-row>

              <!-- Button -->
              <b-button 
                class="mt-4" 
                :id="tab.title" 
                variant="primary" 
                @click="getFormElements">
                Save
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
        let formElements = document.forms[event.target.getAttribute("id")].getElementsByClassName(event.target.getAttribute("id"));
        let formElement;
        for(formElement of formElements){
          console.log(formElement.value);
        }
      }
    },
    created() {
      this.getHomeInfo();
    }
  }
</script>
