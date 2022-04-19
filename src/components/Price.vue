<!-- 
Template
script = logic
-->
<script>
import axios from 'axios';
export default{
  data: () => ({ //error function
    cryptos: [],  //reference the properties we gonna need
    errors: []
  }),
  methods:{ //define the create method (when the components are loaded)
  fetchPrice(e){
    if (e.key == "Enter"){
  //created (){ //define the create method (when the components are loaded)
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms='+this.search+'&tsyms=USD,JPY,EUR')      
    .then(response => {
        this.cryptos = response.data
        console.log(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }

}}}
</script>

<template>

  <div class="test">
    <h1 class="test2">Price by symbol</h1>
    <input type="text" class="input" v-model="search" placeholder="Enter symbol..." @keypress="fetchPrice" >
    <div id="crypto-container" v-for="(value,key) in cryptos">
      <span class="left"> {{ search }} : </span>
      <span class="right"> {{ key }} </span>
      <span class="right"> {{ value }} </span>
    </div>
  </div>
</template>

<style>
  body{
    background: #f1f1f1;
  }

  div#crypto-container{
    background: white;
    width: 70%;
    margin: 0 auto 4px auto;
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