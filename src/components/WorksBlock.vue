<template>
  <div id="worksBox" class="worksArea_box">
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks10" :class='{active:isVisibleWorks10}'>
      <a href="https://maggymoon.jp/" target="_blank">
        <div class="playPic">
          <img src="@/assets/works10.jpg"/>
        </div>
        <p>MAGGY (マギー) オフィシャルサイト</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks09" :class='{active:isVisibleWorks09}'>
      <a href="https://dogman-tokyo.com/" target="_blank">
        <div class="playPic">
          <img src="@/assets/works09.jpg"/>
        </div>
        <p>DogMan / ドッグマン</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks08" :class='{active:isVisibleWorks08}'>
      <a href="http://traction.tokyo/leonard/" target="_blank">
        <div class="playPic">
          <img src="@/assets/works08.jpg"/>
        </div>
        <p>「Leonard」Hotel’s Diner</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks07" :class='{active:isVisibleWorks07}'>
      <a href="http://shoheitakenaka.com/" target="_blank">
        <div class="playPic">
          <img src="@/assets/works07.jpg"/>
        </div>
        <p>SHOHEI TAKENAKA</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks06" :class='{active:isVisibleWorks06}'>
      <a href="https://jamaisvu.co.jp/" target="_blank">
        <div class="playPic">
          <img src="@/assets/works06.jpg"/>
        </div>
        <p>JAMAIS VU（ジャメヴ）公式サイト｜Official Online Store</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks05" :class='{active:isVisibleWorks05}'>
      <a href="https://www.cosmo-com.jp/" target="_blank">
        <div class="playPic">
          <img src="@/assets/works05.jpg"/>
        </div>
        <p>Cosmo Communications INC.</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks14" :class='{active:isVisibleWorks14}'>
      <a href="https://www.rosebud-web.com/creolme_2019aw_lookbook_vol2.html" target="_blank">
        <div class="playPic">
          <img src="@/assets/works14.jpg"/>
        </div>
        <p>CREOLME Autumn 2019 Vol.2</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks13" :class='{active:isVisibleWorks13}'>
      <a href="https://www.rosebud-web.com/creolme_2019aw_lookbook_vol1.html" target="_blank">
        <div class="playPic">
          <img src="@/assets/works13.jpg"/>
        </div>
        <p>CREOLME Autumn 2019 Vol.1</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks12" :class='{active:isVisibleWorks12}'>
      <a href="https://www.rosebud-web.com/creolme_2019ss_lookbook_vol2.html" target="_blank">
        <div class="playPic">
          <img src="@/assets/works12.jpg"/>
        </div>
        <p>CREOLME 2019 SUMMER COLLECTION</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks11" :class='{active:isVisibleWorks11}'>
      <a href="https://www.rosebud-web.com/creolme_2019ss_lookbook_vol1.html" target="_blank">
        <div class="playPic">
          <img src="@/assets/works11.jpg"/>
        </div>
        <p>CREOLME 2019 SPRING VOL.1</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks04" :class='{active:isVisibleWorks04}'>
      <a href="http://triumph-cpn.com/triumph/corelabel/angel25anniversary/" target="_blank">
        <div class="playPic">
          <img src="@/assets/works04.jpg"/>
        </div>
        <p>天使のブラ25周年特設サイト｜Triumph</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks03" :class='{active:isVisibleWorks03}'>
      <a href="https://www.jph-japon.co.jp/" target="_blank">
        <div class="playPic">
          <img src="@/assets/works03.jpg"/>
        </div>
        <p>JEAN-PAUL HÉVIN JAPON</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks02" :class='{active:isVisibleWorks02}'>
      <a href="http://traction.tokyo/" target="_blank">
        <div class="playPic">
          <img src="@/assets/works02.jpg"/>
        </div>
        <p>TRACTION Inc.</p>
        <p>CODING</p>
      </a>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorks" :class='{active:isVisibleWorks}'>
      <a href="http://www.qualiam.com/" target="_blank">
        <div class="playPic">
          <img src="@/assets/works01.jpg"/>
        </div>
        <p>Qualiam.,Inc</p>
        <p>CODING</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        isVisibleWorks: false,
        isVisibleWorks02: false,
        isVisibleWorks03: false,
        isVisibleWorks04: false,
        isVisibleWorks05: false,
        isVisibleWorks06: false,
        isVisibleWorks07: false,
        isVisibleWorks08: false,
        isVisibleWorks09: false,
        isVisibleWorks10: false,
        isVisibleWorks11: false,
        isVisibleWorks12: false,
        isVisibleWorks13: false,
        isVisibleWorks14: false
      }
    },
    methods: {
      visibilityChangedWorks(isVisibleWorks) {
        this.isVisibleWorks = isVisibleWorks
      },
      visibilityChangedWorks02(isVisibleWorks02) {
        this.isVisibleWorks02 = isVisibleWorks02
      },
      visibilityChangedWorks03(isVisibleWorks03) {
        this.isVisibleWorks03 = isVisibleWorks03
      },
      visibilityChangedWorks04(isVisibleWorks04) {
        this.isVisibleWorks04 = isVisibleWorks04
      },
      visibilityChangedWorks05(isVisibleWorks05) {
        this.isVisibleWorks05 = isVisibleWorks05
      },
      visibilityChangedWorks06(isVisibleWorks06) {
        this.isVisibleWorks06 = isVisibleWorks06
      },
      visibilityChangedWorks07(isVisibleWorks07) {
        this.isVisibleWorks07 = isVisibleWorks07
      },
      visibilityChangedWorks08(isVisibleWorks08) {
        this.isVisibleWorks08 = isVisibleWorks08
      },
      visibilityChangedWorks09(isVisibleWorks09) {
        this.isVisibleWorks09 = isVisibleWorks09
      },
      visibilityChangedWorks10(isVisibleWorks10) {
        this.isVisibleWorks10 = isVisibleWorks10
      },
      visibilityChangedWorks11(isVisibleWorks11) {
        this.isVisibleWorks11 = isVisibleWorks11
      },
      visibilityChangedWorks12(isVisibleWorks12) {
        this.isVisibleWorks12 = isVisibleWorks12
      },
      visibilityChangedWorks13(isVisibleWorks13) {
        this.isVisibleWorks13 = isVisibleWorks13
      },
      visibilityChangedWorks14(isVisibleWorks14) {
        this.isVisibleWorks14 = isVisibleWorks14
      }
    }
  }
</script>