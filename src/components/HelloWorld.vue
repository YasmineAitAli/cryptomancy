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

  <RouterLink to="/home"><li><a >Home</a></li> </RouterLink>
  <RouterLink to="/price"><li><a >Price</a> </li> </RouterLink>
  <RouterLink to="/news"><li><a >News</a></li> </RouterLink>
  <li style="float:right"><button style="background-color: #f44336; font-size: 16px;
  cursor: pointer;border: none;
    margin:2px;
  color: white;
  padding: 12px 30px;
  text-align: center;
  text-decoration: none;"  v-on:click="logOut">Sign Out</button> </li>


 
</ul>
<div class="middle">
    <section class="section">
      <img class="image" src="@/assets/logo.png"  /> 
      <div class="title"><p class="p" >Welcome {{ name }}</p>
      </div>
    </section>
    <hr>
  </div>

</template>

<style>
@import url('http://fonts.cdnfonts.com/css/welcome');
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



  .section {
    display: flex;
    background-color: #04AA6D;
  }

  .p{
    color: rgb(241, 253, 235);
    font-size: 42px;
    font-family: 'Welcome', sans-serif;
    justify-items: right;
    padding-left: 70px;
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
