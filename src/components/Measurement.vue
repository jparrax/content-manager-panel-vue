<template>
  <b-container>

    <b-row>
      <b-col>
        <b-card class="mt-3" header-bg-variant="primary" border-variant="primary">
            <template v-slot:header>
              <p class="mb-0 font-weight-bold">modals</p>
            </template>
            <b-form name="modals" :data-ref="modals" @submit="onSubmit">

              <b-row v-for="modal in object.data.modals" :key="modal">
                <b-col>
                  <b-card class="mt-3" :header="modal.title">

                    <b-form-group
                      label="Reference"
                    >
                      <b-form-input
                        class="modals"
                        type="text"
                        v-model="modal.ref"
                        disabled
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label="Title"
                    >
                      <b-form-input
                        class="modals"
                        type="text"
                        v-model="modal.title"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      v-for="(title, propertyName) in modal.titles"
                      :key="title"
                      :label="propertyName + ':'"
                    >
                      <b-form-input
                        class="modals"
                        type="text"
                        :value="title"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group 
                      v-for="(paragraph, propertyName) in modal.paragraphs"
                      :key="paragraph"
                      :label="propertyName + ':'"
                      >
                      <b-form-textarea
                        class="modals"
                        rows="6"
                        :value="paragraph">
                        </b-form-textarea>
                    </b-form-group>

                  </b-card>
                </b-col>
              </b-row>

              <!-- Button -->
              <b-button 
                class="mt-4" 
                id="modals" 
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
        object:""
      }
    },
    methods: {
      getHomeInfo() {
        const endpoint = 'http://localhost:5000/measurement';
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
      }
    },
    created() {
      this.getHomeInfo();
    }
  }
</script>