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
      <div style="width: 60%; float:left">
        <h2>Search cryptocurrencies available by symbol</h2>
        <input type="text" class="input" v-model="search">
        <h3>Available cryptocurrencies:</h3>
        <select class="select" v-model="selected" multiple>
          <option  v-for="c in fetchCrypto" :key="c.id">
          {{ c.symbol }}
          </option>
        </select><br><br>
        <span class="note">Note: Select currencies from the box bellow to show prices</span><br>
        <span class="note">Selected cryptocurrency symbols : {{ selected }}</span><br>
      </div>
      <div>
        <h2>Price by symbol</h2>
        <button class="button" v-on:click="fetchPrice">Show price</button><br><br>
        <div class="crypto-container" v-for="(value,key) in prices">
          <span class="left"> {{ key }} :</span>
          <span class="right"> {{ value.USD }} $</span><br><br> 
          <span class="right"> {{ value.EUR }} €</span><br><br> 
          <span class="right"> {{ value.JPY }} ¥</span><br>
        </div>

      </div>
    </div>
    
</template>

<style>
  .note {
  color: rgb(192, 182, 47);
  font-style: italic;
  }
  .input{
    width: 40%; 
    display: block;
    margin-right: 45%;
    margin-left: auto;
  }
  input[type=text]:focus {
  border: 3px solid #555;
}
  .select{
    overflow-y: scroll; 
    height:200px;
    width: 40%;
    display: block;
    margin-right: 45%;
    margin-left: auto;
    padding: 16px 20px;
    border: none;
    border-radius: 4px;
    background-color: #f1f1f1;
  }
  .about{
    background: white;
    width: 90%;
    margin: 0 auto 4px auto;
    padding: 1em;
    box-shadow: 1px 1px 0 lightgrey;
    display: flex;
    flex-direction: row;
    font-family: sans-serif;
  }
  .button {
  background-color:#bec24b;
  display: block;
  width: 150%;
  margin-left: 50%;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
}
  .button:hover {background-color: #10c558}

  .crypto-container{
    background: white;
    width: 150%;
    margin: 0 0 20px 0;
    margin-left: 50%;
    padding: 1em;
    box-shadow: 1px 1px 0 lightgrey;
  }
  span.left{
    font-weight: bold;
  }
  span.right{
    float:right;
  }
</style>
