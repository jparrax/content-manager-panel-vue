<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card
          :header="title"
          class="mt-3"
        >
          <b-table
            :items="customers"
            :fields="fields"
            striped
            hover
          >
            <template v-slot:cell(notes)="row">
              <b-form-textarea
                size="sm"
                placeholder="Add notes"
                rows="2"
                v-model="row.item.notes"
              >
              </b-form-textarea>
            </template>

            <template v-slot:cell(save)="row">
              <b-button size="lg" @click="onSave(row.item)">Save</b-button>
            </template>
          </b-table>
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
      title: 'Customers Information',
      customers: [],
      fields:  [
        {key: "_id", thClass: 'd-none', tdClass: 'd-none'},
        {key: "name"},
        {key: "email"},
        {key: "phone"},
        {key: "notes"},
        {key: "save"}
      ]
    };
  },
  methods: {
    getCustomersInfo() {
      const endpoint = 'http://localhost:5000/get_customers';
      axios
        .get(endpoint)
        .then((res) => {
          this.customers = res.data;
          console.log(this.customers);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    onSave(item) {
      console.log(JSON.stringify(item, null, 2));
      const endpoint = 'http://localhost:5000/update_customer';
      axios
        .put(endpoint, item)
        .then((res) => {
          console.log('edit success');
          this.toast(true);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    toast(append = false) {
        this.$bvToast.toast(`Customer information saved successfully`, {
          title: 'Update Saved',
          toaster: 'b-toaster-top-center',
          solid: true,
          appendToast: append,
          variant: 'success'
        })
      }
  },
  created() {
    this.getCustomersInfo();
  }
}
</script>