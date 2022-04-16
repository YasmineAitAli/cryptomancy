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
  created (){ //define the create method (when the components are loaded)
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ADA,SOL&tsyms=USD,EUR')      .then(response => {
        this.cryptos = response.data
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }

}
</script>

<template>
  <div class="test">
    <h1 class="test2">Price</h1>
    <div id="crypto-container" v-for="(value,key) in cryptos">
      <span class="left">{{ key }} : </span>
      <span class="right">{{ value.EUR }} €</span>
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
