<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-center pt-5">
        <b-col v-for="item in result" :key="item">
          <div id="karta">
            <b-card :title="item.name" :sub-title="item.category">
              <b-card-text>
                <div v-for="el in item.basket" :key="el">{{el.product}}: {{el.amount}}</div>                
              </b-card-text>
              <a href="#" class="card-link">Pomóż mi</a>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BRow, BContainer, BCol } from "bootstrap-vue";

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
          ]
        },
        {
          name: "Dominik Malcharczyk",
          category: "Technologia",
          basket: [
            { product: "komputer", amount: 1, id: "ds2133123" },
            { product: "myszka", amount: 3, id: "ds321343" }
          ]
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
</style>