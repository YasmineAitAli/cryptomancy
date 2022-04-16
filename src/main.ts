import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
import router from "./router";
// @ts-ignore
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZM7ZDQZ-Tfl3322xCUWombNXD1BTc7CQ",
  authDomain: "cryptomancy-1.firebaseapp.com",
  projectId: "cryptomancy-1",
  storageBucket: "cryptomancy-1.appspot.com",
  messagingSenderId: "219884591769",
  appId: "1:219884591769:web:dc07fce7421b47d4557608"
};

// Initialize Firebase
const appFire = initializeApp(firebaseConfig);

const app = createApp(App).use(store);

app.use(router);
app.use(store);

app.mount("#app");
