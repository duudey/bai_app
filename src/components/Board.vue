<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-center"> <!-- starczy wrzucić jsona w miejsce result i powinno banglać -->
        <b-col v-for="item in result" :key="item" class="m-1">
          <div v-bind:class="'box box-'+item.id" class="row align-items-center p-2">
            <div class="col">
            <div id="name">{{item.name}}</div>
            <div id="category">{{item.category}}</div>
            <span>Potrzebuję: </span>
            <div v-for="el in item.basket" :key="el">{{el.product}}: {{el.amount}}</div>
            <div class="row pt-2">
              <div class="col">
            <b-button v-b-modal="'postModal-'+item.id" class="btn btn-sm">Click to see details</b-button>
            
            <b-modal v-bind:id="'postModal-'+item.id" v-bind:title="'Prośba o pomoc nr: '+item.id">
            <p><b>{{item.name}}</b> Potrzebuje pomocy:</p>
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
import { BRow, BContainer, BCol} from "bootstrap-vue";

export default {
  name: "Board",
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
          id: 2,
        },
        {
          name: "Dominik Malcharczyk",
          category: "Technologia",
          basket: [
            { product: "komputer", amount: 1, id: "ds2133123" },
            { product: "myszka", amount: 3, id: "ds321343" }
          ],
          id: 23,
        },
      ]
    };
  },
  components: {
    BRow,
    BContainer,
    BCol
  }
};
</script>

<style>
.box{
  background-color: rgb(255, 255, 255);
  width: 100%;
  border-radius: 16px;
  height: 100%;
}

#name{
  font-size: 130%;
  color: black;
  font-weight: bold;
}

#category{
  font-style: italic;
  font-size: 12px;
}
</style>