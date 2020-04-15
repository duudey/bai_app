<template>
  <div class="addPostModal">
    <!-- Using modifiers -->
    <b-button v-b-modal.postModal>Dodaj post</b-button>
    <!-- The modal -->
    <b-modal id="postModal" title="Wypełnij pola i daj sobie pomóc 😊">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <label for="input-group-1" style="font-size: 10px">Użytkownik: {{username}}</label>
        <b-form-group id="input-group-1">
          <b-container fluid>
            <b-row id="nameRow" class="my-1">
              <b-col sm="2">
                <label for="nameLabel" style="font-size: 10px">Imię:</label>
              </b-col>
              <b-col sm="10">
                <b-form-input id="nameLabel" size="sm" placeholder="Enter your name"></b-form-input>
              </b-col>
            </b-row>
            <b-row id="categoryRow" class="my-1">
              <b-col sm="2">
                <label for="category" style="font-size: 10px">Kategoria:</label>
              </b-col>
              <b-col sm="10">
                <b-form-select id="category" v-model="selectedCat" :options="options"></b-form-select>
              </b-col>
            </b-row>
            <b-row id="productRow" class="my-3">
              <b-col sm="2">
                <label style="font-size: 10px">Produkty:</label>
              </b-col>
              <ol id="productList">
                <li class="my-1">
                  <b-col sm="2" class="float-right">
                    <b-form-spinbutton id="sb-inline" size="sm" v-model="valueSpin" inline></b-form-spinbutton>
                  </b-col>
                  <b-col sm="8">
                    <b-form-input id="prod-" size="sm" placeholder="Produkt"></b-form-input>
                  </b-col>
                </li>
              </ol>
            </b-row>
            <b-row>
              <b-col>
                <a href="#" @click="addProduct()" class="d-block float-right" style="font-size: 10px;">dodaj produkt...</a>
              </b-col>
            </b-row>
          </b-container>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import {
  BButton,
  BModal,
  VBModal,
  BForm,
  BFormGroup,
  BFormInput,
  BContainer,
  BCol,
  BRow,
  BFormSelect,
  BFormSpinbutton
} from "bootstrap-vue";
import $ from 'jquery';

export default {
  name: "PostModal",
  props: ["username"],
  data() {
    return {
      form: {
        name: "",
        category: "",
        basket: [{ product: "", amount: 0 }],
        street: "",
        city: "",
        id: 0
      },
      show: true,
      selectedCat: null,
      valueSpin: 3,
      options: [
        { value: null, text: "Please select an category" },
        { value: "0", text: "Produkty spożywcze" },
        { value: "1", text: "Środki czystości" },
        { value: "2", text: "Alkohol" },
        { value: "3", text: "Technologia" },
        { value: "4", text: "Edukacja" }
      ],
      html:  `<div>siema</div>`,
    };
  },
  components: {
    BButton,
    "b-modal": BModal,
    BForm,
    BFormGroup,
    BFormInput,
    BCol,
    BRow,
    BContainer,
    BFormSelect,
    BFormSpinbutton
  },
  directives: { "b-modal": VBModal },
  methods: {
    showModal() {
      console.log("modal działa");
    },
    onSubmit() {
      return 0;
    },
    onReset() {
      return 0;
    },

    addProduct(){
      // `<b-col sm="2" class="float-right"><b-form-spinbutton id="sb-inline" size="sm" v-model="valueSpin" inline></b-form-spinbutton></b-col><b-col sm="8"><b-form-input id="prod-" size="sm" placeholder="Produkt"></b-form-input></b-col>`;
      var html;
      html = `<div>siema</div>`;
      var li = document.createElement('li');
      li.innerHTML = html;
      $('#productList').append(li);
    }
  }
};
</script>

<style>
</style>