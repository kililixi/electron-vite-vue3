<template>
  <video id="video" style="width: 100%" :src="mp4" loop />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import mp4 from '@/assets/videos/PresidentObama.mp4'
  export default defineComponent({
    name: 'MediaComp',
    data() {
      return {
        mp4: mp4,
      }
    },
    mounted() {
      const myVideo = document.querySelector('#video') as HTMLVideoElement
      if (myVideo != null) {
        myVideo.play()
      }
    },
  })
</script>
