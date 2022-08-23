<template>
  <el-input v-model="name" />
  <br>
   <el-button type="primary" @click="print" :icon="'Printer'" />
   <el-dialog
    v-model="dialogVisible"
    title="Loading"
    width="50%"
  >
    <span>等待打印完成</span>
  </el-dialog>
</template>

<script lang="ts">
import {ref} from 'vue'
import { ipcRenderer } from 'electron'
export default {
  name: 'Print',
  setup(props) {
    let name = ref('')
    let dialogVisible = ref(false)
    console.log('__dirname', __dirname)
    return {
      name,
      dialogVisible
    }
  },
  methods: {
    print() {
      this.dialogVisible = true
      ipcRenderer.invoke('print', {name: this.name}).then((result) => {
        this.dialogVisible = false
      })
    }
  },
}
</script>