<template>
  <article id="works">
    <section class="ttlArea" v-scroll="ttlScroll" v-observe-visibility="{callback: visibilityChangedTtl, once: true,}" v-bind:class='{active:isVisibleTtl}'>
      <h1 v-observe-visibility="{callback: visibilityChangedTtl, once: true,}" v-bind:class='{active:isVisibleTtl}'>WORKS</h1>
    </section>
    <div class="bgWhite">
      <section class="worksArea">
        <div class="tabs">
          <router-link class="tabsFirst" to="/works/">WEB SITE</router-link>
          <p>WEDDING MOVIE</p>
        </div>
        <WorksMovieBlock></WorksMovieBlock>
      </section>
    </div>
  </article>
</template>

<script>
import WorksMovieBlock from '../components/WorksMovieBlock.vue'
export default {
  name: 'WorksMovie',
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
    },
    ttlScroll: function (evt, el) {
      if (window.innerWidth < 768) {
        if (window.scrollY > 366) {
          el.setAttribute(
            'style',
            'display: none;'
          )
        } else{
          el.setAttribute(
            'style',
            'display: flex;'
          )
        }
      }
    }
  },
  components: {
    WorksMovieBlock
  },
  head: {
    title: function () {
      return {
        inner: this.title
      }
    }
  }
}
</script>