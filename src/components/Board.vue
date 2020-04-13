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
            <a href="#" class="card-link">Click to see details</a>
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
import $ from 'jquery';

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
          id: 1
        },
        {
          name: "Dominik Malcharczyk",
          category: "Technologia",
          basket: [
            { product: "komputer", amount: 1, id: "ds2133123" },
            { product: "myszka", amount: 3, id: "ds321343" }
          ],
          id: 2
        },
      ]
    };
  },
  components: {
    BRow,
    BContainer,
    BCol
  },
  methods:{
    addId(){
      $('#box').each(()=>{
        $(this).attr('id', this.result.id)
      })
    }
  },
  created(){
    this.addId();
  },
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