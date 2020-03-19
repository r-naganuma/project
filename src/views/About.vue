<template>
<article id="about">
	<section class="ttlArea" v-observe-visibility="{callback: visibilityChangedTtl, once: true,}" v-bind:class='{active:isVisibleTtl}'>
		<h1 v-observe-visibility="{callback: visibilityChangedTtl, once: true,}" v-bind:class='{active:isVisibleTtl}'>RYO NAGANUMA</h1>
	</section>
	<div class="bgWhite">
		<section class="yearArea">
			<div class="yearArea_txt">
				<p class="yearArea_txt--ttl">永沼 遼 / Front-end engineer, Designer</p>
				<dl>
					<dt>1991</dt>
					<dd>
						神奈川県横浜市にて生まれる。
					</dd>
				</dl>
				<dl>
					<dt>2014</dt>
					<dd>
						大手のWeb制作会社に就職。<br class="pc_contents">ディレクターからデザイン、コーディングまで全てに携わる。
					</dd>
				</dl>
				<dl>
					<dt>2018</dt>
					<dd>
						ベンチャーのWeb制作会社に転職。<br class="pc_contents">フロントエンドエンジニアとしてコーディングに携わる。
					</dd>
				</dl>
				<dl>
					<dt>2020</dt>
					<dd>
						フリーランスとして活動中。
					</dd>
				</dl>
			</div>
			<div class="yearArea_pic" v-observe-visibility="visibilityChangedNaganuma" :class='{active:isVisibleNaganuma}'>
				<img src="@/assets/naganuma_1-1.jpg">
			</div>
		</section>
		<section class="aboutArea">
			<div class="aboutArea_inner">
				<AboutBlock></AboutBlock>
				<!-- <p class="aboutArea_note">
					結婚式ムービーのご依頼は、<router-link to="/contact/">お問い合わせ</router-link>か<a href="">ココナラ</a>からご連絡ください。
				</p> -->
			</div>
		</section>
	</div>
</article>
</template>

<script>
import AboutBlock from '../components/AboutBlock.vue'
export default {
	name: 'About',
	data(){
		return {
			isVisibleTtl: false,
			isVisibleNaganuma: false,
			title: 'ABOUT ME'
		}
	},
	methods: {
		visibilityChangedTtl(isVisibleTtl) {
			this.isVisibleTtl = isVisibleTtl
		},
		visibilityChangedNaganuma(isVisibleNaganuma) {
			this.isVisibleNaganuma = isVisibleNaganuma
		}
	},
	components: {
		AboutBlock
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