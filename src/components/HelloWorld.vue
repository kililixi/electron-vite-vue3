<script setup lang="ts">
  defineProps<{ msg: string }>()
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <el-button type="primary" :icon="'Printer'" circle @click="toPrint" />
  <el-button type="primary" :icon="'Film'" circle @click="toMedia" />
</template>

<script lang="ts">
  export default {
    name: 'HelloWorld',
    methods: {
      toPrint() {
        this.$router.push({ name: 'Print' })
      },
      toMedia() {
        this.$router.push({ name: 'Media' })
      },
    },
  }
</script>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>
