<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Layout'
}
</script>
