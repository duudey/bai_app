<template>
  <div class="news">
    <p>Component news - wieści o koronawirusie będą zamieszczane tutaj. Dane pobrane z API ↙️</p>
    <div class="sick">
      Liczba zarażonych osób w polsce to aktualnie:
      <b>{{this.results}}</b> 🧔🏻
    </div>
    <div class="try">click me</div>
  </div>
</template>

<script>
import axios from "axios";
import $ from 'jquery'

const API = "https://api.covid19api.com/";
export default {
  name: "News",
  data() {
    return {
      results: ""
    };
  },
  created() {
    this.showApi();
  },
  mounted(){
    ///próba dodaniea jquery
  $('.try').click(()=>{
      console.log('siemano');
    })
  },
  methods: {
    //załadowanie API o coronavirusie i pobranie wartości liczby zarażonych osób
    showApi() {
      axios
        .get(`${API}country/poland/status/confirmed/live`)
        .then(response => {
          console.log(response);
          // eslint-disable-next-line no-undef
          this.results = response.data[response.data.length - 1].Cases;
        })
        .catch(error => {
          console.log(error);
        });
    },
   
  }
};

</script>
<style  scoped>
.news {
  background-color: rgb(130, 158, 196);
}
</style>