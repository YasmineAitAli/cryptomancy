import { createStore } from 'vuex'
import Vuex from 'vuex'
import { createUserWithEmailAndPassword, getAuth, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import router from "@/router";

export default createStore({
  state: { 
    user: {
      loggedIn: false,
      data: null
    },
    test: false,
    user:null,
    status:null,
    error:null
  },
  getters: {
    user: state => state.user,

    status(state){
      return state.status
    },
    user(state){
      return state.user
    },
    error(state){
      return state.error
    },
    user: state => state.user
  },
  mutations: {
    updateUser(state, { user }) {
      Vue.set(state, "user", user);
    },

    setUser(state,payload){
      state.user = payload;
      console.log(state.user)

    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },

    removeUser(state){
      state.user =null
    },

    setStatus(state, payload){
      state.status = payload
    },

    setError ( state, payload){
      state.error = payload
    },
    updateUser(state, {user}) {
      Vue.set(state, "user", user);
    },
  },
  actions: {
    signUpAction({commit}, payload) {
      commit('setStatus', 'loading')
      console.log("in conn");
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((response) => {
        alert('Successfully registered');
        commit('setUser', response.user.uid)
          commit('setStatus','success')
          commit('setError', null)
          console.log("in");
          router.push('/login')
      })
        .catch((error) => {
          alert('didnt register');
          console.log(" not in");
          commit('setError', error.message)
          console.log(error);
        });
    },

    signInAction({commit}, payload) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((response) => {
        alert('Successfully logged in');
        commit('setUser', response.user.uid)
          commit('setStatus','success')
          commit('setError', null)
          console.log("in");
          router.push('/home')
      })
        .catch((error) => {
          alert('didnt log in');
          commit('setError', error.message)
          commit('setStatus', 'failure')

          console.log(error);
        });
    },

    signOutAction ( {commit}) {
      const auth = getAuth();
      signOut(auth)
        .then((response) => {
          commit('setUser', null)
          commit('setStatus', 'success')
          commit('setError', null)
          router.push('/login')

        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    },

    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },

    handleAuthStateChange({commit, dispatch}){
      const auth = getAuth();
        onAuthStateChanged(auth,user => {
        if(user){
          commit('setLoggedIn', true)
          localStorage.setItem('loggedIn', true)
        }else{
          commit('setLoggedIn', false);
          localStorage.getItem('loggedIn', false)
        }
      })
    }




  },
  modules: {
  }
})



//this.$store.state.test=true;
