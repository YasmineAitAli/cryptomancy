<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// @ts-ignore
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/price">Price</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
