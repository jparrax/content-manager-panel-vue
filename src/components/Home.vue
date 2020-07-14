<template>
  <b-container id="this-container">

    <b-row v-for="component in object.data" :key="component">
      <b-col>
        <b-card class="mt-3" :header="component">
            <b-form @submit="onSubmit">

              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  required
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Text:" label-for="input-2">
                <b-form-textarea
                  id="textarea"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>

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
      const endpoint = 'http://localhost:5000/home';
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
    },
    created() {
      this.getHomeInfo();
    }
  }
</script>
