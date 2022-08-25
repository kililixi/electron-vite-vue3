<template>
  <img style="height: 140px" src="../assets/electron.png" />
  <video id="video" style="width: 100%" :src="videoUrl" loop />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { join } from 'path'

  const publicPath = join(
    __dirname,
    import.meta.env.PROD ? '../..' : '../../../public'
  )

  export default defineComponent({
    name: 'MediaComp',
    data() {
      return {
        videoUrl: publicPath + '/videos/PresidentObama.mp4',
      }
    },
    mounted() {
      console.log('publicPath', publicPath)
      const myVideo = document.querySelector('#video') as HTMLVideoElement
      if (myVideo != null) {
        myVideo.play()
      }
    },
  })
</script>
