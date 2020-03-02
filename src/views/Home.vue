<template>
  <article id="top">
    <section class="heroArea" v-scroll="svgScroll">
			<lottie :options="lottieOptions" v-on:lottieCreated="initLottie"/>
    </section>
    <section class="aboutArea">
			<div class="aboutArea_inner">
				<h2>ABOUT ME</h2>
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
import * as lottieData from '../assets/data.json';
export default {
	name: 'Home',
	data(){
		return {
			lottie : [],
			lottieOptions: {
				lottieData: lottieData
			}
		}
	},
	methods: {
		initLottie (lottie) {
			this.lottie = lottie;
			setTimeout( () => {
				this.playLottie();
			}, 1000);
		},
		playLottie () {
			this.lottie.play();
		},
		svgScroll: function (evt, el) {
			if (window.innerWidth < 768) {
				if (window.scrollY > 500) {
					el.setAttribute(
					'style',
					'opacity: 0;'
					)
				} else{
					el.setAttribute(
					'style',
					'opacity: 1;'
					)
				}
			}
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