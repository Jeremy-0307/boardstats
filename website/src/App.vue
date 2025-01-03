<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <header>
    <div>
      <Sidebar />
      <div class="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
        <router-view />
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>


