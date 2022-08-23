<template>
  <el-input v-model="name" />
  <br />
  <el-button type="primary" :icon="'Printer'" @click="print" />
  <el-dialog v-model="dialogVisible" title="Loading" width="50%">
    <span>等待打印完成</span>
  </el-dialog>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { ipcRenderer } from "electron";
export default defineComponent({
  name: "PrintComp",
  setup() {
    const name = ref("");
    const dialogVisible = ref(false);
    console.log("__dirname", __dirname);
    return {
      name,
      dialogVisible,
    };
  },
  methods: {
    print() {
      this.dialogVisible = true;
      ipcRenderer.invoke("print", { name: this.name }).then(() => {
        this.dialogVisible = false;
      });
    },
  },
});
</script>
