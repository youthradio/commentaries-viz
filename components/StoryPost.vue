<template>
  <div
    class="post-container"
    :style="{backgroundColor: postData.secondary_color}"
    @mouseover="toggle('play')"
    @mouseleave="toggle('pause')"
  >
    <div class="box">
      <img
        :src="postData.featured_image"
        :onload="$emit('resetLayout')"
        class="img-fluid z-image"
      >
      <div class="title">
        <h3 v-html="postData.title" />
      </div>
    </div>
    <audio
      ref="player"
      controlshidden=""
      preload="none"
      :src="postData.feature_audio"
      type="audio/mp3"
    />
    <div ref="progressLayer" class="post-container-layer" />
    <div ref="progressLayerRight" class="post-container-layer layer-rigth" />
  </div>
</template>

<style lang="scss" scoped>
.box{
  position: relative;
}
.title {
  position: absolute;
  bottom: 0px;
  color: white;
  /* background-color: white; */
  text-shadow: 0px 2px #00000094;
  z-index: 100;
}
.z-image{
  z-index: 0;
}
h3{
  font-size:  1em;
  margin: 0.5em;
}
.post-container {
  position: relative;
  width: calc(100vw/5);
}
 .post-container-layer {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 100%;
    background-image: linear-gradient(120deg, #eaee44bf, #33d0ff82);
    opacity: 1;
    z-index: 10;
    @supports (mix-blend-mode: hard-light) {
        mix-blend-mode: hard-light;
    }
  }
.layer-rigth{
  right: 0;
  left: unset;
  background-image: linear-gradient(60deg, #33d0ff82, #eaee44bf) !important;
}
.img-fluid{
  width: 100%;
  height: auto;
}
.img-box{
  max-height: calc(100vh/6);
}

</style>

<script>
export default {
  name: 'StoryPost',

  props: {
    postData: {
      type: Object,
      required: true,
      default: null
    }
  },
  data () {
    return {
      test: 'TEST'
    }
  },
  methods: {
    toggle (mode) {
      const player = this.$refs.player
      if (mode === 'play') {
        player.play()
        player.addEventListener('timeupdate', this.onPlay, true)
      } else {
        player.removeEventListener('timeupdate', this.onPlay, true)
        player.pause()
      }
    },
    onPlay () {
      const player = this.$refs.player
      this.$refs.progressLayer.style.width = `${50 * player.currentTime / player.duration}%`
      this.$refs.progressLayerRight.style.width = `${50 * player.currentTime / player.duration}%`
    }
  }
}
</script>
