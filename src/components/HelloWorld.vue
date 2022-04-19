<!-- 
Template
script = logic
-->
<script>


import axios from 'axios';
  import { mapGetters } from "vuex";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";



export default{
  data: () => ({ //error function
    cryptos: [],  //reference the properties we gonna need
    errors: [],
    email:"",
    user: null,
    user_id:"",
    name:""
 

  }),
  created (){ //define the create method (when the components are loaded)
  const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        this.email = user.email;
        this.name = user.email.split('@')[0];
} else {
        this.email = "waaaaaaalou";
}
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ADA,SOL&tsyms=USD,EUR')      .then(response => {
        this.cryptos = response.data
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })


  },
  methods: {
    logOut(){
      const auth = getAuth();
      signOut(auth).then(() => {
          this.$router.push('/login')
        })
    }}
};


</script>

<template>
<ul>

  <RouterLink to="/"><li><a class="active" href="#home">Home</a></li> </RouterLink>
  <RouterLink to="/about"><li><a >About</a> </li> </RouterLink>
  <RouterLink to="/price"><li><a >Price</a></li> </RouterLink>
  <li style="float:right"><button style="background-color: #f44336; font-size: 16px;
  cursor: pointer;border: none;
    margin:2px;
  color: white;
  padding: 12px 30px;
  text-align: center;
  text-decoration: none;"  v-on:click="logOut">Sign Out</button> </li>


 
</ul>
<div class="middle">
    <h1> Welcome {{name }} to CRYPTOMANCY</h1>
    <hr>
  </div>

    <h1 class="test2">Currently on the top</h1>

  <div class="cards">
    <div class="card card-1" v-for="(value,key) in cryptos">
      <h2 class="card__title">{{ key }} : {{ value.EUR }} €</h2>
    </div>
  </div><br>
    <hr>

</template>

<style>
  body{
    background: #f1f1f1;
  }

  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
h1 {
  text-align: center;
}


li {
  float: left;
  border-right:1px solid #bbb;
}

li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04AA6D;
}








.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.card {
  width: 200px;
  height: 80px;
  display: grid;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.card__title {
  padding-left: 15px;
  padding-bottom: 10px;
  font-weight: 10;
  color: #131212;
}


/* CARD BACKGROUNDS */

.card-1 {
background: radial-gradient(#60efbc, #58d5c9);}
</style>
