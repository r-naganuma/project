<template>
  <div id="worksBox" class="worksArea_box">
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
        // items: [
        //   { 
        //     url: 'http://traction.tokyo/leonard/',
        //     imagePath: require('@/assets/works08.jpg'),
        //     name: '「Leonard」Hotel’s Diner',
        //     category: 'CODING'
        //   },
        //   { 
        //     url: 'http://shoheitakenaka.com/',
        //     imagePath: require('@/assets/works07.jpg'),
        //     name: 'SHOHEI TAKENAKA',
        //     category: 'CODING'
        //   },
        //   { 
        //     url: 'https://jamaisvu.co.jp/',
        //     imagePath: require('@/assets/works06.jpg'),
        //     name: 'JAMAIS VU（ジャメヴ）公式サイト｜Official Online Store',
        //     category: 'CODING'
        //   },
        //   { 
        //     url: 'https://www.cosmo-com.jp/',
        //     imagePath: require('@/assets/works05.jpg'),
        //     name: 'Cosmo Communications INC.',
        //     category: 'CODING'
        //   },
        //   { 
        //     url: 'http://triumph-cpn.com/triumph/corelabel/angel25anniversary/',
        //     imagePath: require('@/assets/works04.jpg'),
        //     name: '天使のブラ25周年特設サイト｜Triumph',
        //     category: 'CODING'
        //   },
        //   { 
        //     url: 'https://www.jph-japon.co.jp/',
        //     imagePath: require('@/assets/works03.jpg'),
        //     name: 'JEAN-PAUL HÉVIN JAPON',
        //     category: 'CODING'
        //   },
        //   { 
        //     url: 'http://traction.tokyo/',
        //     imagePath: require('@/assets/works02.jpg'),
        //     name: 'TRACTION Inc.',
        //     category: 'CODING'
        //   },
        //   { 
        //     url: 'http://www.qualiam.com/',
        //     imagePath: require('@/assets/works01.jpg'),
        //     name: 'Qualiam.,Inc',
        //     category: 'CODING'
        //   }
        // ],
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
      }
    }
  }
</script>