<template>
  <img style="height: 140px" src="../assets/electron.png" />
  <video id="video" style="width: 100%" :src="videoUrl" loop />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { videoPrefixPath } from '@/utils/VideoUrlUtil'

  console.log('videoPrefix', videoPrefixPath)
  export default defineComponent({
    name: 'MediaComp',
    data() {
      return {
        videoUrl: videoPrefixPath + '/PresidentObama.mp4',
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
