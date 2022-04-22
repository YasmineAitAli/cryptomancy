<!-- 
Template
script = logic
-->
<script>
import axios from 'axios';
export default{
  data: () => ({
    news: [],  //reference the properties we gonna need
    errors: []
  }),
  created (){ //define the create method (when the components are loaded)
    axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')      
    .then(response => {
        this.news = response.data.Data
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }

}
</script>

<template>
  <div>
    <h1>Latest news articles</h1>
    <div id="crypto-container" v-for="(value,key) in news">
      <span><img class="icon" v-bind:src=" value.imageurl " /></span>
      <div class="contents">
        <p class="sources"> Source: {{ value.source }}</p>
        <h2 class="titles"><a v-bind:href="value.guid">{{ value.title }}</a></h2>
        <p class="paragraphs"> {{ value.body }}</p>
      </div>
    </div>
  </div>
</template>

<style>
  body{
    background: #f1f1f1;
  }


  div#crypto-container{
    background: white;
    width: 80%;
    margin: 0 auto 4px auto;
    padding: 1em;
    box-shadow: 1px 1px 0 lightgrey;
    display: flex;
    flex-direction: row;
    font-family: sans-serif;
  }

  .sources {
  color: rgb(192, 182, 47);
  font-style: italic;
  }

  .paragraphs {
  color: #555;
  display: flex;
  flex-direction: column;
}

  .contents {
    padding: 20px;
  }

  .titles {
    font-size: 20px;
    color: #222;
    line-height: 20px;
  }
</style>