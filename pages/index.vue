<template>
  <div class="grid">
    <div
      v-for="post in postsData"
      :key="post.id"
      class="item"
    >
      <a :href="post.link" target="_blanket">
        <StoryPost
          :post-data="post"
          @imageLoaded="imageLoaded"
        />
      </a>
    </div>
  </div>
</template>

<script>

import StoryPost from '~/components/StoryPost.vue'
// import DATA_LINKS from '~/data/data.json'

export default {
  components: {
    StoryPost
  },
  data () {
    return {
      postsDataRaw: [],
      grid: null,
      totalImagesLoaded: 0
    }
  },
  computed: {
    postsData () {
      return this.postsDataRaw.map(e => ({
        featured_image: e.episode_featured_image,
        feature_audio: e.acf.featured_audio,
        secondary_color: e.acf.secondary_color,
        primary_color: e.acf.primary_color,
        content: e.content,
        date: e.date,
        link: e.link,
        id: e.id,
        title: e.title.rendered
      }))
    }

  },
  created () {
  },
  mounted () {
    this.fetchData(31)
      .then(this.$nextTick)
      .then(() => {
        this.startMuuri()
      })
  },
  methods: {
    async fetchData (perPage) {
      this.postsDataRaw = await fetch(`https://yr.media/wp-json/wp/v2/posts?outlets=94&per_page=${perPage}`)
        .then(d => d.json())
    },
    startMuuri () {
    /* globals Muuri */
      this.grid = new Muuri('.grid', {
        layout: {
          fillGaps: true,
          horizontal: false,
          alignRight: false,
          alignBottom: false,
          rounding: false
        },
        dragEnabled: false,
        showDuration: 0,
        hideDuration: 0,
        layoutDuration: 0

      })
    },
    imageLoaded () {
      this.totalImagesLoaded++
      if (this.grid) {
        this.grid.refreshItems().layout()
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  position: relative;
}
.item {
  display: block;
  position: absolute;
  // width: 100px;
  // height: 100px;
  // margin: 5px;
  // z-index: 1;
  // background: #000;
  // color: #fff;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
