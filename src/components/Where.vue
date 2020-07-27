<template>
  <b-container>

    <b-row v-for="(tab, propertyName) in object.data.where" :key="tab">
      <b-col>
        <b-card class="mt-3" header-bg-variant="primary" border-variant="primary">
            <template v-slot:header>
              <p class="mb-0 font-weight-bold">{{ tab.title }}</p>
            </template>
            <b-form :name="tab.title" :data-array="propertyName" @submit="onSubmit">

              <!-- Tab info -->
              <b-form-group
                label="Title:"
              >
                <b-form-input
                  :class="tab.title"
                  type="text"
                  v-model="tab.title"
                  disabled
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
              <card v-for="card in tab.cards" :key="card" :title="tab.title" :card="card"></card>

              <addcard :title="tab.title"></addcard>

              <b-button 
                class="mt-4 ml-2" 
                variant="success" 
                @click="updateTab"
                :id="tab.title" 
                >
                Update
              </b-button>

          </b-form>
        </b-card>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  import axios from 'axios';
  import addcard from './AddCard.vue';
  import card from './Card.vue'
  export default {
    components: {
      addcard,
      card
    },
    data() {
      return {
        id: "",        
        object:""
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
      updateTab() {
        let event = window.event;
        let arrayNo = document.forms[event.target.getAttribute("id")].getAttribute("data-array");
        let formElements = document.forms[event.target.getAttribute("id")].getElementsByClassName(event.target.getAttribute("id"));
        let i = 0;
        let j = 1;
        let numberOfCards=(formElements.length-2)/4;
        const endpoint= `http://localhost:5000/where/${this.id}`;
        let infoToChange = {
          ref: '',
          tab:{
            title: '',
            width: '',
            cards: []
          }
        }
        
        // Give values to title and width
        infoToChange.ref = "where." + arrayNo;
        infoToChange.tab.title = formElements[i].value;
        i++;
        infoToChange.tab.width = formElements[i].value;
        i++;

        // Create cards
        for(j; j <= numberOfCards; j++){
          let card = {};
          card["title"] = formElements[i].value;
          i++;
          card["content"] = formElements[i].value;
          i++;
          card["img1"] = formElements[i].value;
          i++;
          card["img2"] = formElements[i].value;
          i++;
          infoToChange.tab.cards.push(card);
        }

        // Send request
        axios
        .put(endpoint, infoToChange)
        .then(() => {
          window.alert("Content in "+ event.target.getAttribute("id") + ' updated');
        })
        .catch((error) => {
          console.error(error);
          window.alert('There has been an error');
        });

        // Update images
        let formImgs = document.forms[event.target.getAttribute("id")].getElementsByClassName("img");
        let formData = new FormData();
        const imgendpoint = `http://localhost:5000/imgs`;
        formData.append("dir",event.target.getAttribute("id").toLowerCase());
        for(let img in formImgs){
          try{
            if(formImgs[img].files.length != 0){
              formData.append(parseInt(img) + 1,formImgs[img].files[0]);
            };
          }
          catch(err){
            console.log(err);  
          }
        }
        axios
        .post(imgendpoint,formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        )
        .then(function(){
          window.alert("Images updated")
          location.reload();
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },
    },
    created() {
      this.getHomeInfo();
    }
  }
</script>
