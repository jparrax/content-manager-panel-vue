<template>
  <b-container id="this-container">
    <b-row v-for="n in 10" :key="n">
      <b-col>
        <b-card class="mt-3" header="component">
            <b-form @submit="onSubmit" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  required
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-textarea
                  id="textarea"
                  v-model="form.text"
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
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          text: 'Hello',
        },
        show: true,
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
    }
  }
</script>
