<template>
  <div
    class="post-container"
    :style="{backgroundColor: postData.secondary_color}"
    @mouseover="toggle('play')"
    @mouseleave="toggle('pause')"
  >
    <div class="box">
      <img :src="postData.featured_image" class="img-fluid">
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
}
h3{
  font-size:  1em;
  margin: 0.5em;
}
.post-container {
  position: relative;
  width: calc(100vw/5);
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
  computed: {

  },
  methods: {
    toggle (mode) {
      if (mode === 'play') {
        this.$refs.player.play()
      } else {
        this.$refs.player.pause()
      }
    }
  }
}
</script>
