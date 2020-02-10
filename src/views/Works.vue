<template>
  <article id="works">
    <section class="ttlArea" v-observe-visibility="{callback: visibilityChangedTtl, once: true,}" v-bind:class='{active:isVisibleTtl}'>
      <h1 v-observe-visibility="{callback: visibilityChangedTtl, once: true,}" v-bind:class='{active:isVisibleTtl}'>WORKS</h1>
    </section>
    <div class="bgWhite">
      <section class="worksArea">
        <div class="tabs">
          <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">WEB SITE</a>
          <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">WEDDING MOVIE</a>
        </div>
        <div v-show="activetab === 1" class="tabcontent">
          <WorksBlock></WorksBlock>
        </div>
        <div v-show="activetab === 2" class="tabcontent">
          <WorksMovieBlock></WorksMovieBlock>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import WorksBlock from '../components/WorksBlock.vue'
import WorksMovieBlock from '../components/WorksMovieBlock.vue'
export default {
  name: 'Works',
  data(){
    return {
      isVisibleTtl: false,
      activetab: 1,
      title: 'WORKS'
    }
  },
  methods: {
    visibilityChangedTtl(isVisibleTtl) {
      this.isVisibleTtl = isVisibleTtl
    }
  },
  components: {
    WorksBlock,
    WorksMovieBlock
  },
  head: {
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'description', content: 'フロントエンドエンジニア、デザイナーとして活動している永沼遼のポートフォリオサイトです。趣味で動画編集もしております。' },
      { name: 'keywords', content: 'WORKS, RYO, engineer, Designer, movie, wedding, portfolio, 永沼, 遼, エンジニア, デザイナー, 動画, 結婚式, ムービー, プロフィールムービー, オープニングムービー, ポートフォリオ' },
      { property: 'og:title', content: 'WORKS' },
      { property: 'og:description', content: 'フロントエンドエンジニア、デザイナーとして活動している永沼遼のポートフォリオサイトです。趣味で動画編集もしております。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ryo-naganuma.com/works/' },
      { property: 'og:image', content: 'https://ryo-naganuma.com/assets/ogp.png' },
      { name: 'twitter:card', content: 'summary' }
    ]
  }
}
</script>