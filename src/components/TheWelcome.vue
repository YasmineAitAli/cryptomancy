<script>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import axios from 'axios';

export default{
  data: () => ({ //error function
    currencies: [],
    errors: []
  }),
  created (){ //define the create method (when the components are loaded)
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=EUR')
      .then(response => {
        this.currencies = response.data.Data
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
    <h1 class="test2">Top List</h1>
    <div id="crypto-container" v-for="(value,key) in currencies">
      <span class="left">{{ key }} : </span>
      <span class="left">{{ value.CoinInfo.FullName }} ||</span>
      <span class="left"> Price : {{ value.DISPLAY.EUR.PRICE }} ||</span>
      <span class="left"> Volume : {{ value.DISPLAY.EUR.VOLUME24HOURTO }} ||</span>
      <span class="left"> Change percentage: {{ value.DISPLAY.EUR.CHANGEPCT24HOUR }} ||</span>
    </div>
  </div>
</template>
