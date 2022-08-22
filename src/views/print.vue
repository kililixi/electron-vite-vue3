<template>
  <el-input v-model="name" />
  <br>
   <el-button type="primary" @click="print" :icon="'Printer'" />
</template>

<script lang="ts">
import {ref} from 'vue'
import { ipcRenderer } from 'electron'
export default {
  name: 'Print',
  setup(props) {
    let name = ref('')
    return {
      name
    }
  },
  methods: {
    print() {
      console.log(ipcRenderer)
      ipcRenderer.send('print')
    }
  },
}
</script>