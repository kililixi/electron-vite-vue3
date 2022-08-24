<template>
  <el-input v-model="name" />
  <br />
  <el-button type="primary" :icon="'Printer'" @click="print" />
  <el-dialog v-model="dialogVisible" title="Loading" width="50%">
    <span>等待打印完成</span>
  </el-dialog>
</template>

<script lang="ts">
  import { ElMessageBox } from 'element-plus'
  import { ref, defineComponent } from 'vue'
  import { ipcRenderer } from 'electron'
  export default defineComponent({
    name: 'PrintComp',
    setup() {
      const name = ref('')
      const dialogVisible = ref(false)
      console.log('__dirname', __dirname)
      return {
        name,
        dialogVisible,
      }
    },
    methods: {
      print() {
        this.dialogVisible = true
        ipcRenderer
          .invoke('print', { name: this.name })
          .then((result) => {
            ElMessageBox.alert(result, '成功', {
              confirmButtonText: '关闭',
            })
          })
          .catch((err) => {
            ElMessageBox.alert(err, '失败', {
              confirmButtonText: '关闭',
            })
          })
          .finally(() => {
            this.dialogVisible = false
          })
      },
    },
  })
</script>
