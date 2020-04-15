<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <!-- starczy wrzucić jsona w miejsce result i powinno banglać -->
        <b-col cols="3" v-for="(item, idx) in result" :key="idx" class="m-1">
          <div v-bind:class="'box box-'+item.id" class="row align-items-center p-2">
            <div class="col">
              <div id="name">{{item.name}}</div>
              <div id="category">{{item.category}}</div>
              <div class="text-left">
              <b>Potrzebuję:</b>
              <div v-for="(el, idx) in item.basket" :key="idx">{{el.product}}: {{el.amount}}</div>
              </div>
              <div class="row pt-2">
                <div class="col">
                  <b-button v-b-modal="'postModal-'+item.id" class="btn btn-sm">Click to see details</b-button>
                  <b-modal
                    v-bind:id="'postModal-'+item.id"
                    v-bind:title="item.name + ' #' +item.id"
                  >
                    <p>Potrzebuje:</p>
                    
                    <div v-for="(el, idx) in item.basket" 
                    :key="idx" >{{el.product}}: {{el.amount}}</div>
                    <div class="pt-2">{{item.adress}}</div>
                  </b-modal>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {
  BRow,
  BContainer,
  BCol,
  BButton,
  VBModal,
  BModal
} from "bootstrap-vue";

export default {
  name: "Board",
  components: {
    BRow,
    BContainer,
    BCol,
    BButton,
    "b-modal": BModal
  },
  directives: { "b-modal": VBModal },
  data() {
    return {
      result: [
        {
          name: "Paweł Lula",
          category: "Wypieki",
          basket: [
            { product: "ser", amount: 32, id: "ds2133123" },
            { product: "chleb", amount: 2, id: "ds321343" },
            { product: "ser kozi", amount: 43, id: "ds940390934" }
          ],
          adress: "Ursyniowska 23, Rybnik",
          id: 2
        },
        {
          name: "Dominik Malcharczyk",
          category: "Technologia",
          basket: [
            { product: "komputer", amount: 1, id: "ds2133123" },
            { product: "myszka", amount: 3, id: "ds321343" }
          ],
          adress: "Mariańska 4A, Poznań",
          id: 23
        },
      ],
    };
  }
};
</script>

<style>
.box {
  background-color: rgb(255, 255, 255);
  width: 100%;
  border-radius: 16px;
  height: 100%;
}

#name {
  font-size: 130%;
  color: black;
  font-weight: bold;
}

#category {
  font-style: italic;
  font-size: 12px;
}
</style>