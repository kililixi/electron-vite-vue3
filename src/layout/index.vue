<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        Header
        <el-button v-if="isShowBack()" icon="back" @click="back" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'LayoutComp',
    methods: {
      back() {
        this.$router.back()
      },
      isShowBack() {
        if (this.$route.name === 'Dashboard') {
          return false
        }
        return true
      },
    },
  })
</script>
