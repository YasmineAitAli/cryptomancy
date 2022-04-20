// Html de la vue
<template>
<html>
  <br><br>
<div class="login-form">
        <h1> Login </h1>
<div class="content">
  <div class="input-field">
  <input v-model="email" id="email" type="text"  placeholder="Email"/>
  </div>

  <div class="input-field">
  <input v-model="password" id="password" type="password" placeholder="Password" />
  </div>
  <div >
    <br>
  <span style="color: red"><p v-if="errMsg"  > {{errMsg}} </p></span> <br>
  </div>


  <div class="action">
  <button @click="$router.push('register')">I don't have an account</button>
  <button  v-on:click="connection">Login</button>
  </div>
</div> 
</div>
<br>
<br><br><br><br><br><br><br><br>
</html>
</template>

// Script de la vue
<script lang="ts">
 
import { defineComponent } from "@vue/runtime-core";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { mapGetters } from 'vuex';

export default defineComponent({
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errMsg:"",
      name: "",
    };
  },
  computed: {
    ...mapGetters(["user"]),
    nextRoute(){
      return this.$route.query.redirect || "/home";
    }
  },
  watch:{
    user: function(changedUser) {
      if (changedUser) {
          this.$router.push('/home')
      }
    },
  },
  methods: {
    connection() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((user) => {
          // Signed in
          console.log(user);
          this.$router.push('/home')
        })
          .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        switch (errorCode){
          case "auth/invalid-email":
            this.errMsg = "Invalid email"
            break;
          case "auth/user-not-found":
            this.errMsg = "No account with that email was found"
            break;
          case "auth/wrong-password":
            this.errMsg = "Incorrect password"
            break;
          default:
            this.errMsg= "Email or password is incorrect";
            break;
        }
        });
    },
    
  },
  mounted() {
 
  },

  
  
   
      
});
</script>
 
// Style pour cette vue
<style scoped>
html  {
  background-image: url("https://www.spectrum-markets.com/sites/default/files/2021-12/SP_143_Boom_and_Bust_Article_WebHeader_1200x675px.jpg");
height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;

}


.login-form {
  background: #fff;
  width: 500px;
  margin: 65px auto;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
}
.login-form h1 {
  padding: 35px 35px 0 35px;
  font-weight: 300;
}
.login-form .content {
  padding: 35px;
  text-align: center;
}
.login-form .input-field {
  padding: 12px 5px;
}
.login-form .input-field input {
  font-size: 16px;
  display: block;
  font-family: "Rubik", sans-serif;
  width: 100%;
  padding: 10px 1px;
  border: 0;
  border-bottom: 1px solid #747474;
  outline: none;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.login-form .input-field input::-webkit-input-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input::-moz-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input:-ms-input-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input::-ms-input-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input::placeholder {
  text-transform: uppercase;
}
.login-form .input-field input:focus {
  border-color: #222;
}
.login-form a.link {
  text-decoration: none;
  color: #747474;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 20px;
}
.login-form .action {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
}
.login-form .action button {
  width: 100%;
  border: none;
  padding: 18px;
  font-family: "Rubik", sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  background: #e8e9ec;
  color: #777;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0;
  letter-spacing: 0.2px;
  outline: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.login-form .action button:hover {
  background: #d8d8d8;
}
.login-form .action button:nth-child(2) {
  background: #0559f5;
  color: #fff;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 4px;
}
.login-form .action button:nth-child(2):hover {
  background: #3c4d6d;
}
</style>