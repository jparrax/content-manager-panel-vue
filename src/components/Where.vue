<template>
  <b-container id="this-container">

    <b-row v-for="tab in object.data" :key="tab">
      <b-col>
        <b-card class="mt-3" :header="tab.title">
            <b-form @submit="onSubmit">

              <b-form-group
                label="Title:"
              >
                <b-form-input
                  type="text"
                  v-model="tab.title"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Width:"
              >
                <b-form-input
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
                            type="text"
                            v-model="card.title"
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Text:" label-for="input-2">
                          <b-form-textarea
                            id="textarea"
                            rows="3"
                            max-rows="6"
                            v-model="card.content"
                          ></b-form-textarea>
                        </b-form-group>

                    </b-form>
                  </b-card>
                </b-col>
              </b-row>

              <!-- Button -->
              <br>
              <b-button :id="tab.title" type="submit" variant="primary">Submit</b-button>

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
    },
    created() {
      this.getHomeInfo();
    }
  }
</script>
