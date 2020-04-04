<template>
    <div class="news">
        <p class="newsText" :title="newsTitle">{{newsTitle}}️</p>
        <p class="newsText"
           :title="`Zarażeni: ${this.results}, zgony: ${this.polandInfo.TotalDeaths}, uzdrowieni: ${this.polandInfo.TotalRecovered}`">
            Liczba zarażonych osób w polsce to aktualnie:
            <b>{{this.results}}</b>
            Liczba zgonów:
            <b>{{this.polandInfo.TotalDeaths}}</b>
            Liczba uzdrowionych:
            <b>{{this.polandInfo.TotalRecovered}}</b></p>
    </div>
</template>

<script>
    import axios from "axios";

    const API = "https://api.covid19api.com/";
    const API2 = "https://api.covid19api.com/summary?";

    export default {
        name: "News",
        data() {
            return {
                results: "",
                polandInfo: "",
                country: "",
                newsTitle: 'Component news - wieści o koronawirusie będą zamieszczane tutaj. Dane pobrane z API ↙'
            };
        },
        created() {
            this.showApi();
        },
        methods: {
            //załadowanie API o coronavirusie i pobranie wartości liczby zarażonych osób, liczbie zgonów i uzdrowionych
            showApi() {
                const one = axios.get(`${API}country/poland/status/confirmed/live`);
                const two = axios.get(`${API2}`);

                axios
                    .all([one, two])
                    .then(
                        axios.spread((...responses) => {
                            // eslint-disable-next-line no-undef
                            const responseOne = responses[0];
                            const responseTwo = responses[1];

                            this.results = responseOne.data[responseOne.data.length - 1].Cases;
                            var countries = responseTwo.data.Countries;
                            var arr = [];
                            countries.forEach(element => {
                                arr.push(element.Country);
                            });
                            this.polandInfo = countries[arr.indexOf("Poland")];
                        })
                    )
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    };
</script>
<style scoped>
    .news {
        background-color: rgb(130, 158, 196);
        height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .newsText {
        margin: 0;
    }
</style>