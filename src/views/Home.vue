<template>
  <article id="top">
    <section class="heroArea">
      <lottie :options="defaultOptions" v-on:animCreated="handleAnimation"/>
    </section>
    <section class="aboutArea" v-observe-visibility="{callback: visibilityChanged01, once: true,}" v-bind:class='{active:isVisible01}'>
			<div class="aboutArea_inner">
				<h2>ABOUT ME</h2>
				<!-- <p class="aboutArea_lead">
					<span v-for="(t, index) in text" :key="index" class="item" :style="{animationDelay: index*40+'ms'}" v-text="t" />
				</p> -->
				<AboutBlock></AboutBlock>
				<div class="btn_readMore">
					<router-link to="/about/">
						<p>READ MORE</p>
						<img src="@/assets/icn_arrow.png">
					</router-link>
				</div>
			</div>
    </section>
    <section class="worksArea">
			<h2>WORKS</h2>
			<WorksBlock></WorksBlock>
			<div class="btn_readMore">
				<router-link to="/works/">
					<p>READ MORE</p>
					<img src="@/assets/icn_arrow.png">
				</router-link>
			</div>
    </section>
  </article>
</template>

<script>
import AboutBlock from '../components/AboutBlock.vue'
import WorksBlock from '../components/WorksBlock.vue'
import Lottie from '../components/Lottie.vue';
import * as animationData from '../assets/data.json';
export default {
	name: 'Home',
	data(){
		return {
			isVisible01: false,
			// text: 'Front-end engineer / Designer',
			defaultOptions: {animationData: animationData},
      animationSpeed: 1
		}
	},
	methods: {
		visibilityChanged01(isVisible01) {
			this.isVisible01 = isVisible01
		},
		handleAnimation: function (anim) {
      this.anim = anim;
    }
	},
	components: {
		AboutBlock,
		WorksBlock,
		Lottie
	},
  head: {
    meta: [
      { name: 'description', content: 'フロントエンドエンジニア、デザイナーとして活動している永沼遼のポートフォリオサイトです。趣味で動画編集もしております。' },
      { name: 'keywords', content: 'NAGANUMA, RYO, engineer, Designer, movie, wedding, portfolio, 永沼, 遼, エンジニア, デザイナー, 動画, 結婚式, ムービー, プロフィールムービー, オープニングムービー, ポートフォリオ' },
      { property: 'og:title', content: 'RYO NAGANUMA' },
      { property: 'og:description', content: 'フロントエンドエンジニア、デザイナーとして活動している永沼遼のポートフォリオサイトです。趣味で動画編集もしております。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ryo-naganuma.com' },
      { property: 'og:image', content: 'https://ryo-naganuma.com/assets/ogp.png' },
      { name: 'twitter:card', content: 'summary' }
    ]
  }
}
</script>