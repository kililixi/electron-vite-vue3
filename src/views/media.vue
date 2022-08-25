<template>
  <img style="height: 140px" src="../assets/electron.png" />
  <video id="video" style="width: 100%" :src="videoUrl" loop />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { join } from 'path'
  import videoPrefix from '@/utils/VideoUrlUtil'

  // const publicPath = join(__dirname, import.meta.env.PROD ? '' : '../public')
  console.log('videoPrefix', videoPrefix)
  export default defineComponent({
    name: 'MediaComp',
    data() {
      return {
        videoUrl: videoPrefix + '/PresidentObama.mp4',
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
