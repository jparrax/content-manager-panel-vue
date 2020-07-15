<template>
  <b-container>

    <b-row v-for="tab in object.data" :key="tab">
      <b-col>
        <b-card class="mt-3" header-bg-variant="primary" border-variant="primary">
            <template v-slot:header>
              <p class="mb-0 font-weight-bold">{{ tab.title }}</p>
            </template>
            <b-form :name="tab.title" :data-ref="tab.ref" @submit="onSubmit">

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
                      label="Description:">
                      <b-form-textarea
                        :class="tab.title"
                        rows="6"
                        v-model="card.content">
                        </b-form-textarea>
                    </b-form-group>
                    
                    <b-form-group
                      label="Image 1:"
                    >
                      <b-form-input
                        :class="tab.title"
                        type="text"
                        v-model="card.img1"
                        disabled>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                      label="Image 2:"
                    >
                      <b-form-input
                        :class="tab.title"
                        type="text"
                        v-model="card.img2"
                        disabled>
                        </b-form-input>
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
  import axios from 'axios';

  export default {
    data() {
      return {
        id: "",        
        object:"",
        message: '',
      }
    },
    methods: {
      getHomeInfo() {
        const endpoint = 'http://localhost:5000/where';
        axios.get(endpoint)
          .then((res) => {
            this.id = res.data._id.$oid;
            delete res.data["_id"];
            this.object = res;
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
        let tabRef = document.forms[event.target.getAttribute("id")].getAttribute("data-ref");
        let formElements = document.forms[event.target.getAttribute("id")].getElementsByClassName(event.target.getAttribute("id"));
        let i = 0;
        let j = 1;
        let numberOfCards=(formElements.length-2)/4;
        const endpoint= `http://localhost:5000/where/${this.id}`;
        let infoToChange = {
          ref: '',
          title: '',
          width: '',
          cards: {}
        }
        
        // Give values to title and width
        infoToChange.ref = tabRef;
        infoToChange.title = formElements[i].value;
        i++;
        infoToChange.width = formElements[i].value;
        i++;

        // Create cards
        for(j; j <= numberOfCards; j++){

          infoToChange.cards["card" + j] = {};

          infoToChange.cards["card" + j]["title"] = formElements[i].value;
          i++;
          infoToChange.cards["card" + j]["content"] = formElements[i].value;
          i++;
          infoToChange.cards["card" + j]["img1"] = formElements[i].value;
          i++;
          infoToChange.cards["card" + j]["img2"] = formElements[i].value;
          i++;

        }

        // Send request
        axios
        .put(endpoint, infoToChange)
        .then(() => {
          window.alert(event.target.getAttribute("id") + ' Updated');
        })
        .catch((error) => {
          console.error(error);
          window.alert('There has been an error');
        });
      }
    },
    created() {
      this.getHomeInfo();
    }
  }
</script>
