<template>
  <img style="height: 140px" src="../assets/electron.png" />
  <video id="video" style="width: 100%" src="/videos/PresidentObama.mp4" loop />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'MediaComp',
    data() {
      return {}
    },
    mounted() {
      const myVideo = document.querySelector('#video') as HTMLVideoElement
      if (myVideo != null) {
        myVideo.play()
      }
    },
  })
</script>
