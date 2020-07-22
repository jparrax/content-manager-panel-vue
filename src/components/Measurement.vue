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
                  :value="object.data.title.ref"
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
                              :value="col.title"
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
                variant="primary"
                @click="updateDocument(createTitleDocument(getFormRef(), getFormElements()))">
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
                  :value="object.data.fieldsets.ref"
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
                        :value="row.class"
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
                              :value="col.title"
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group 
                            label="Content:"
                            >
                            <b-form-textarea
                              :class="object.data.fieldsets.ref"
                              rows="6"
                              :value="col.content">
                              </b-form-textarea>
                          </b-form-group>

                           <b-form-group
                            label="Column size:">
                            <b-form-input
                              :class="object.data.fieldsets.ref"
                              type="text"
                              :value="col.cols"
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
                variant="primary"
                @click="updateDocument(createFieldsetsDocument(getFormRef(), getFormElements()))">
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
                  :value="object.data.imgs.ref"
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
                        :value="row.class"
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
                              :value="col.class"
                              disabled
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group
                            v-for="(modal, propertyName) in col.modals"
                            :key="modal"
                            :label="propertyName"
                            disabled
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
                  :value="object.data.button.ref"
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
                              :value="col.title"
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group
                            label="Button"
                          >
                            <b-form-input
                              :class="object.data.button.ref"
                              type="text"
                              :value="col.button"
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
                variant="primary"
                @click="updateDocument(createButtonDocument(getFormRef(), getFormElements()))">
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
            <b-form name="modals" data-ref="modals" @submit="onSubmit">

              <b-form-group
                    label="Reference"
                  >
                    <b-form-input
                      class="modals"
                      type="text"
                      :value="object.data.modals.ref"
                      disabled
                    ></b-form-input>
                  </b-form-group>

              <b-row v-for="modal in object.data.modals.modals" :key="modal">
                <b-col>
                  <b-card class="mt-3" :header="modal.title">

                    <b-form-group
                      label="Reference"
                    >
                      <b-form-input
                        class="modals"
                        type="text"
                        :value="modal.ref"
                        disabled
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label="Title"
                    >
                      <b-form-input
                        class="modals"
                        type="text"
                        :value="modal.title"
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
                variant="primary"
                @click="updateDocument(createModalsDocument(getFormRef(), getFormElements()))">
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
      },
      getFormRef() {
        let event = window.event;
        let tabRef = document.forms[event.target.getAttribute("id")].getAttribute("data-ref");
        return tabRef;
      },
      getFormElements() {
        let event = window.event;
        let formElements = document.forms[event.target.getAttribute("id")].getElementsByClassName(event.target.getAttribute("id"));
        return formElements;
      },
      createTitleDocument(formRef, formElements){
        let i = 0;
        let infoToChange = {
          "ref" : "",
          "rows" : {
            "row1": {
              "cols": {
                "col1": {
                  "title": ""
                }
              }
            }
          }
        }

        infoToChange.ref = formRef;
        i++
        infoToChange.rows.row1.cols.col1.title = formElements[i].value;

        return infoToChange
      },
      createFieldsetsDocument(formRef, formElements){
        let i = 0;
        let infoToChange = {
          "ref" : "",
          "rows" : {
            "row1": {
              "class": "",
              "cols" : {
                "col1": {
                  "title" : "",
                  "content" : "",
                  "cols" : ""
                }
              }
            },
            "row2": {
              "class": "",
              "cols" : {
                "col1": {
                  "title": "",
                  "content": "",
                  "cols" : ""
                },
                "col2": {
                  "title": "",
                  "content": "",
                  "cols" : ""
                }
              }
            },
            "row3": {
              "class": "",
              "cols":{
                "col1": {
                  "title": "",
                  "content": "",
                  "cols": "" 
                },
                "col2": {
                  "title": "",
                  "content": "",
                  "cols": ""
                }
              }
            }
          }
        }

        infoToChange.ref = formRef;
        i++;
        infoToChange.rows.row1.class = formElements[i].value;
        i++;
        infoToChange.rows.row1.cols.col1.title = formElements[i].value;
        i++;
        infoToChange.rows.row1.cols.col1.content = formElements[i].value;
        i++;
        infoToChange.rows.row1.cols.col1.cols = formElements[i].value;
        i++;
        infoToChange.rows.row2.class = formElements[i].value;
        i++;
        infoToChange.rows.row2.cols.col1.title = formElements[i].value;
        i++;
        infoToChange.rows.row2.cols.col1.content = formElements[i].value;
        i++;
        infoToChange.rows.row2.cols.col1.cols = formElements[i].value;
        i++;
        infoToChange.rows.row2.cols.col2.title = formElements[i].value;
        i++;
        infoToChange.rows.row2.cols.col2.content = formElements[i].value;
        i++;
        infoToChange.rows.row2.cols.col2.cols = formElements[i].value;
        i++;
        infoToChange.rows.row3.class = formElements[i].value;
        i++;
        infoToChange.rows.row3.cols.col1.title = formElements[i].value;
        i++;
        infoToChange.rows.row3.cols.col1.content = formElements[i].value;
        i++;
        infoToChange.rows.row3.cols.col1.cols = formElements[i].value;
        i++;
        infoToChange.rows.row3.cols.col2.title = formElements[i].value;
        i++;
        infoToChange.rows.row3.cols.col2.content = formElements[i].value;
        i++;
        infoToChange.rows.row3.cols.col2.cols = formElements[i].value;

        return infoToChange;
      },
      createButtonDocument(formRef, formElements){
        let i = 0;
        let infoToChange = {
          "ref" : "",
          "rows" : {
            "row1": {
              "cols" : {
                "col1": {
                  "title": "",
                  "button": ""
                }
              }
            }
          }
        }

        infoToChange.ref = formRef;
        i++;
        infoToChange.rows.row1.cols.col1.title = formElements[i].value;
        i++;
        infoToChange.rows.row1.cols.col1.button = formElements[i].value;

        return infoToChange
      },
      createModalsDocument(formRef, formElements){
        let i = 0;
        let infoToChange = {
          "ref" : "",
          "modals" : {
            "modal1": {
              "ref": "",
              "title" : "",
              "titles": {
                "title1" : "",
                "title2" : ""
              },
              "paragraphs": {
                "paragraph1" : "",
                "paragraph2" : ""
              }
            },
            "modal2": {
              "ref": "",
              "title" : "",
              "titles": {
                "title1" : "",
                "title2" : ""
              },
              "paragraphs": {
                "paragraph1" : "",
                "paragraph2" : ""
              }
            },
            "modal3": {
              "ref": "",
              "title" : "",
              "titles": {
                "title1" : ""
              },
              "paragraphs": {
                "paragraph1" : ""
              }
            },
            "modal4": {
              "ref": "",
              "title" : "",
              "titles": {
                "title1" : ""
              },
              "paragraphs": {
                "paragraph1" : ""
              }
            },
            "modal5": {
              "ref": "",
              "title" : "",
              "titles": {
                "title1" : "",
                "title2" : ""
              },
              "paragraphs": {
                "paragraph1" : "",
                "paragraph2": ""
              }
            },
            "modal6": {
              "ref": "",
              "title" : "",
              "titles": {
                "title1" : ""
              },
              "paragraphs": {
                "paragraph1" : ""
              }
            }
          }
        }

        infoToChange.ref = formRef;
        i++;
        infoToChange.modals.modal1.ref = formElements[i].value;
        i++;
        infoToChange.modals.modal1.title = formElements[i].value;
        i++;
        infoToChange.modals.modal1.titles.title1 = formElements[i].value;
        i++;
        infoToChange.modals.modal1.titles.title2 = formElements[i].value;
        i++;
        infoToChange.modals.modal1.paragraphs.paragraph1 = formElements[i].value;
        i++;
        infoToChange.modals.modal1.paragraphs.paragraph2 = formElements[i].value;
        i++;
        infoToChange.modals.modal2.ref = formElements[i].value;
        i++;
        infoToChange.modals.modal2.title = formElements[i].value;
        i++;
        infoToChange.modals.modal2.titles.title1 = formElements[i].value;
        i++;
        infoToChange.modals.modal2.titles.title2 = formElements[i].value;
        i++;
        infoToChange.modals.modal2.paragraphs.paragraph1 = formElements[i].value;
        i++;
        infoToChange.modals.modal2.paragraphs.paragraph2 = formElements[i].value;
        i++;
        infoToChange.modals.modal3.ref = formElements[i].value;
        i++;
        infoToChange.modals.modal3.title = formElements[i].value;
        i++;
        infoToChange.modals.modal3.titles.title1 = formElements[i].value;
        i++;
        infoToChange.modals.modal3.paragraphs.paragraph1 = formElements[i].value;
        i++;
        infoToChange.modals.modal4.ref = formElements[i].value;
        i++;
        infoToChange.modals.modal4.title = formElements[i].value;
        i++;
        infoToChange.modals.modal4.titles.title1 = formElements[i].value;
        i++;
        infoToChange.modals.modal4.paragraphs.paragraph1 = formElements[i].value;
        i++;
        infoToChange.modals.modal5.ref = formElements[i].value;
        i++;
        infoToChange.modals.modal5.title = formElements[i].value;
        i++;
        infoToChange.modals.modal5.titles.title1 = formElements[i].value;
        i++;
        infoToChange.modals.modal5.titles.title2 = formElements[i].value;
        i++;
        infoToChange.modals.modal5.paragraphs.paragraph1 = formElements[i].value;
        i++;
        infoToChange.modals.modal5.paragraphs.paragraph2 = formElements[i].value;
        i++;
        infoToChange.modals.modal6.ref = formElements[i].value;
        i++;
        infoToChange.modals.modal6.title = formElements[i].value;
        i++;
        infoToChange.modals.modal6.titles.title1 = formElements[i].value;
        i++;
        infoToChange.modals.modal6.paragraphs.paragraph1 = formElements[i].value;
        i++;

        return infoToChange
      },
      updateDocument(infoToChange){
        const endpoint= `http://localhost:5000/measurement/${this.id}`;
        axios
        .put(endpoint, infoToChange)
        .then(() => {
          window.alert('Successfully Updated');
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