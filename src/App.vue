<script  lang="ts">
import { onBeforeMount } from '@vue/runtime-core';
import { RouterLink, RouterView, useRoute,useRouter } from "vue-router";
import { getAuth, onAuthStateChanged} from "firebase/auth";

// @ts-ignore

import { mapActions } from "vuex";
export default {
  setup(){
    const router = useRouter();
    const route = useRoute();
    onBeforeMount(()=> {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
       if (!user) {
        router.replace('/login')
        
        } else  if (route.path == "/login" || route.path == "/register")
        {
          router.replace('/')
        }
});

    })

  },
  /*methods:{
    ...mapActions('auth', ['handleAuthStateChange'])
  },
  mounted(){
    this.handleAuthStateChange()
  }*/
}
</script>

<template>
<Header />
  <header>
    <div class="wrapper">

    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
