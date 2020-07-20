<template>
  <b-container>

    <b-row>
      <b-col>
        <b-card class="mt-3" header-bg-variant="primary" border-variant="primary">
            <template v-slot:header>
              <p class="mb-0 font-weight-bold">{{object.data.title.ref}}</p>
            </template>
            <b-form :name="object.data.title.ref" :data-ref="object.data.title.ref" @submit="onSubmit">
              
              <b-form-group
                label="Reference">
                <b-form-input
                  :class="object.data.title.ref"
                  type="text"
                  v-model="object.data.title.ref"
                  disabled
                ></b-form-input>
              </b-form-group>

              <b-row v-for="(row, propertyName) in object.data.title.rows" :key="row">
                <b-col>
                  <b-card class="mt-3" :header="propertyName">

                    <b-row v-for="(col, propertyName) in row.cols" :key="col">
                      <b-col>
                        <b-card class="mt-3" :header="propertyName">

                          <b-form-group
                            label="Title:">
                            <b-form-input
                              :class="object.data.title.ref"
                              type="text"
                              v-model="col.title"
                            ></b-form-input>
                          </b-form-group>

                        </b-card>
                      </b-col>
                    </b-row>

                  </b-card>
                </b-col>
              </b-row>

              <b-button 
                class="mt-4" 
                :id="object.data.title.ref"
                variant="primary">
                Save
              </b-button>

          </b-form>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-card class="mt-3" header-bg-variant="primary" border-variant="primary">
            <template v-slot:header>
              <p class="mb-0 font-weight-bold">{{object.data.fieldsets.ref}}</p>
            </template>
            <b-form :name="object.data.fieldsets.ref" :data-ref="object.data.fieldsets.ref" @submit="onSubmit">
              
              <b-form-group
                label="Reference">
                <b-form-input
                  :class="object.data.fieldsets.ref"
                  type="text"
                  v-model="object.data.fieldsets.ref"
                  disabled
                ></b-form-input>
              </b-form-group>

              <b-row v-for="(row, propertyName) in object.data.fieldsets.rows" :key="row">
                <b-col>
                  <b-card class="mt-3" :header="propertyName">

                    <b-form-group
                      label="Class">
                      <b-form-input
                        :class="object.data.fieldsets.ref"
                        type="text"
                        v-model="row.class"
                        disabled
                      ></b-form-input>
                    </b-form-group>

                    <b-row v-for="(col, propertyName) in row.cols" :key="col">
                      <b-col>
                        <b-card class="mt-3" :header="propertyName">

                          <b-form-group
                            label="Title:">
                            <b-form-input
                              :class="object.data.fieldsets.ref"
                              type="text"
                              v-model="col.title"
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group 
                            label="Content:"
                            >
                            <b-form-textarea
                              :class="object.data.fieldsets.ref"
                              rows="6"
                              v-model="col.content">
                              </b-form-textarea>
                          </b-form-group>

                           <b-form-group
                            label="Column size:">
                            <b-form-input
                              :class="object.data.fieldsets.ref"
                              type="text"
                              v-model="col.cols"
                              disabled
                            ></b-form-input>
                          </b-form-group>

                        </b-card>
                      </b-col>
                    </b-row>

                  </b-card>
                </b-col>
              </b-row>

              <b-button 
                class="mt-4" 
                :id="object.data.fieldsets.ref"
                variant="primary">
                Save
              </b-button>

          </b-form>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-card class="mt-3" header-bg-variant="primary" border-variant="primary">
            <template v-slot:header>
              <p class="mb-0 font-weight-bold">{{object.data.imgs.ref}}</p>
            </template>
            <b-form :name="object.data.imgs.ref" :data-ref="object.data.imgs.ref" @submit="onSubmit">
              
              <b-form-group
                label="Reference">
                <b-form-input
                  :class="object.data.imgs.ref"
                  type="text"
                  v-model="object.data.imgs.ref"
                  disabled
                ></b-form-input>
              </b-form-group>

              <b-row v-for="(row, propertyName) in object.data.imgs.rows" :key="row">
                <b-col>
                  <b-card class="mt-3" :header="propertyName">

                    <b-form-group
                      label="Class">
                      <b-form-input
                        :class="object.data.imgs.ref"
                        type="text"
                        v-model="row.class"
                        disabled
                      ></b-form-input>
                    </b-form-group>

                    <b-row v-for="(col, propertyName) in row.cols" :key="col">
                      <b-col>
                        <b-card class="mt-3" :header="propertyName">

                          <b-form-group
                            label="Class">
                            <b-form-input
                              :class="object.data.imgs.ref"
                              type="text"
                              v-model="col.class"
                              disabled
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group
                            v-for="(modal, propertyName) in col.modals"
                            :key="modal"
                            :label="propertyName"
                          >
                            <b-form-input
                              :class="object.data.button.ref"
                              type="text"
                              :value="modal"
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group
                            v-for="(link, propertyName) in col.links"
                            :key="link"
                            :label="propertyName"
                          >
                            <b-form-input
                              :class="object.data.button.ref"
                              type="text"
                              :value="link"
                              disabled
                            ></b-form-input>
                          </b-form-group>

                        </b-card>
                      </b-col>
                    </b-row>

                  </b-card>
                </b-col>
              </b-row>

              <b-button 
                class="mt-4" 
                :id="object.data.imgs.ref"
                variant="primary">
                Save
              </b-button>

          </b-form>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-card class="mt-3" header-bg-variant="primary" border-variant="primary">
            <template v-slot:header>
              <p class="mb-0 font-weight-bold">{{object.data.button.ref}}</p>
            </template>
            <b-form :name="object.data.button.ref" :data-ref="object.data.button.ref" @submit="onSubmit">
              
              <b-form-group
                label="Reference">
                <b-form-input
                  :class="object.data.button.ref"
                  type="text"
                  v-model="object.data.button.ref"
                  disabled
                ></b-form-input>
              </b-form-group>

              <b-row v-for="(row, propertyName) in object.data.button.rows" :key="row">
                <b-col>
                  <b-card class="mt-3" :header="propertyName">

                    <b-row v-for="(col, propertyName) in row.cols" :key="col">
                      <b-col>
                        <b-card class="mt-3" :header="propertyName">

                          <b-form-group
                            label="Title"
                          >
                            <b-form-input
                              :class="object.data.button.ref"
                              type="text"
                              v-model="col.title"
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group
                            label="Button"
                          >
                            <b-form-input
                              :class="object.data.button.ref"
                              type="text"
                              v-model="col.button"
                            ></b-form-input>
                          </b-form-group>

                        </b-card>
                      </b-col>
                    </b-row>

                  </b-card>
                </b-col>
              </b-row>

              <b-button 
                class="mt-4" 
                :id="object.data.button.ref"
                variant="primary">
                Save
              </b-button>

          </b-form>
        </b-card>
      </b-col>
    </b-row>

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

              <b-button 
                class="mt-4" 
                id="modals" 
                variant="primary">
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