<template>
  <b-container id="this-container">

    <b-row v-for="jumbotron in object.data" :key="jumbotron">
      <b-col>
        <b-card class="mt-3" header-bg-variant="primary" border-variant="primary">
            <template v-slot:header>
              <p class="mb-0 font-weight-bold">{{ jumbotron.title }}</p>
            </template>         
            <b-form :name="jumbotron.title" :data-ref="jumbotron.ref" @submit="onSubmit">

              <b-form-group
                label="Title:"
              >
                <b-form-input
                  :class="jumbotron.title"
                  type="text"
                  v-model="jumbotron.title"
                ></b-form-input>
              </b-form-group>

              <b-form-group 
                label="Description:">
                <b-form-textarea
                  :class="jumbotron.title"
                  rows="6"
                  v-model="jumbotron.content">
                  </b-form-textarea>
              </b-form-group>

              <b-form-group
                label="Router:">
                <b-form-input
                  :class="jumbotron.title"
                  type="text"
                  v-model="jumbotron.router"
                  disabled>
                  </b-form-input>
              </b-form-group>

              <b-form-group
                label="Button:"
              >
                <b-form-input
                  :class="jumbotron.title"
                  type="text"
                  v-model="jumbotron.button"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Image:">
                <b-form-input
                  :class="jumbotron.title"
                  type="text"
                  v-model="jumbotron.img"
                  disabled
                ></b-form-input>
              </b-form-group>

              <b-button 
                class="mt-4" 
                variant="primary" 
                :id="jumbotron.title"
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
        id: "",
        object:""
      }
    },
    methods: {
      getHomeInfo() {
        const endpoint = 'http://localhost:5000/home';
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
        let info;
        let i = 0;
        const endpoint= `http://localhost:5000/home/${this.id}`;
        let infoToChange = {
          ref: '',
          title: '',
          content: '',
          router: '',
          button: '',
          img: ''
        }
        
        // Give values to json
        for(info in infoToChange){
         if(info == 'ref'){
           infoToChange.ref = tabRef;
         }else{
          infoToChange[info] = formElements[i].value;
          i++
         }
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
