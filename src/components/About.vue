<script>
import axios from 'axios'
export default{
  data: () => ({ //error function
    prices: [],  //reference the properties we gonna need
    cryptos: [],
    errors: [],
    search: '',
    selected: ''
  }),
  //methods:{ //define the create method (when the components are loaded)
  //fetchPrice(e){
  //  if (e.key == "Enter"){
  created(){
        axios.defaults.headers.common['Authorization'] = "Apikey dc643e21c267666f80b102938b080df4db58ffc852076ac4641188fb14c525a1";
        axios.get('https://min-api.cryptocompare.com/data/blockchain/list')      
        .then(response => {
          this.cryptos = response.data.Data;
          console.log(response.data.Data);
        })
        .catch(e => {
          this.errors.push(e)
        })
  },
  methods:{ //define the create method (when the components are loaded)
  fetchPrice: function(e){
    if (e){
    let s = []
    if(this.selected !== ''){
      axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms='+this.selected+'&tsyms=USD,JPY,EUR')      
      .then(response => {
        this.prices = response.data
        s = Object.values(this.prices)
      })
      .catch(e => {
        this.errors.push(e)
      })
    } else {
    s = this.prices
    console.log(s)
    }
  }}
},
  computed:{
    fetchCrypto(){
      let se = []
      if(this.search !== ''){
        se = Object.values(this.cryptos).filter(p => 
        p.symbol.toLowerCase().includes(this.search.toLowerCase())
      ) 
      console.log(this.cryptos);
      console.log(se);
     } else {
      se = this.cryptos
     }
     return se;
    }
}}


</script>

<template>
    <div class="about">
      <h1>Search cryptocurrencies available by symbol</h1>
      <div class="search-box">
        <input type="text" class="search-bar" v-model="search">
        <h3>Available cryptocurrencies:</h3>
        <select v-model="selected" multiple style="overflow-y: scroll; height:200px;">
          <option  v-for="c in fetchCrypto" :key="c.id">
          {{ c.symbol }}
          </option>
        </select>
        <span>Sélectionné(s) : {{ selected }}</span>
      </div>
      <div class="test">
        <h1 class="test2">Price by symbol</h1>
        <button v-on:click="fetchPrice">Price</button>
        <div id="crypto-container" v-for="(value,key) in prices">
          <span class="left"> {{ key }} :</span>
          <span class="right"> {{ value.USD }} $</span>
        </div>

      </div>
    </div>
    
</template>