<template>
<article id="contact">
  <section class="ttlArea" v-observe-visibility="{callback: visibilityChangedTtl, once: true,}" v-bind:class='{active:isVisibleTtl}'>
    <h1 v-observe-visibility="{callback: visibilityChangedTtl, once: true,}" v-bind:class='{active:isVisibleTtl}'>CONTACT</h1>
  </section>
  <div class="bgWhite">
    <div class="contactArea">
      <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdJIMx52l_JyplMG9HEfFdgxuoVJxequ6BJXtH3IFJENLCFUg/formResponse">
        <div class="contactArea_list">
          <label>貴社名</label>
          <input id="company" type="text" name="entry.1888403505">
        </div>
        <div class="contactArea_list">
          <label>お名前 <span>*</span></label>
          <input id="name" type="text" name="entry.1996124425" placeholder="山田 花子" required>
        </div>
        <div class="contactArea_list">
          <label for="email">メールアドレス <span>*</span></label>
          <input id="email" type="text" name="entry.512682865" placeholder="abc@gmail.com" required>
        </div>
        <div class="contactArea_list">
          <label for="tel">電話番号</label>
          <input id="tel" type="text" name="entry.1105674239" placeholder="08012345678">
        </div>
        <div class="contactArea_list">
          <label for="msg">お問い合わせ内容 <span>*</span></label>
          <textarea id="msg" name="entry.2047389775" required></textarea>
        </div>
        <button type="submit" name="button" value="送信する">送信する</button>
      </form>
    </div>
  </div>
</article>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      isVisibleTtl: false,
      title: 'CONTACT'
    }
  },
  methods: {
    visibilityChangedTtl(isVisibleTtl) {
      this.isVisibleTtl = isVisibleTtl
    }
  },
  head: {
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'description', content: 'フロントエンドエンジニア、デザイナーとして活動している永沼遼のポートフォリオサイトです。趣味で動画編集もしております。' },
      { name: 'keywords', content: 'CONTACT, お問い合わせ, NAGANUMA, RYO, engineer, Designer, movie, wedding, portfolio, 永沼, 遼, エンジニア, デザイナー, 動画, 結婚式, ムービー, プロフィールムービー, オープニングムービー, ポートフォリオ' },
      { property: 'og:title', content: 'CONTACT' },
      { property: 'og:description', content: 'フロントエンドエンジニア、デザイナーとして活動している永沼遼のポートフォリオサイトです。趣味で動画編集もしております。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ryo-naganuma.com/contact/' },
      { property: 'og:image', content: 'https://ryo-naganuma.com/assets/ogp.png' },
      { name: 'twitter:card', content: 'summary' }
    ]
  }
}
</script>