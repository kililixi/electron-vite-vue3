<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  mounted() {
    this.$router.push({name: 'Dashboard'})
  }
}
</script>
