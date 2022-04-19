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
  apiKey: "AIzaSyBTsZB-dyYfiask1TEYdNNm-0DrMP5SMhs",
  authDomain: "cryptoseyaa.firebaseapp.com",
  projectId: "cryptoseyaa",
  storageBucket: "cryptoseyaa.appspot.com",
  messagingSenderId: "58774914415",
  appId: "1:58774914415:web:36fca5344160bc0509549a",
  measurementId: "G-94G004XCK4"
};
// Initialize Firebase
const appFire = initializeApp(firebaseConfig);
import { onAuthStateChanged, getAuth } from "firebase/auth";

     const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          store.dispatch("fetchUser", user);
        });

const app = createApp(App).use(store);

app.use(router);
app.use(store);

app.mount("#app");
           

