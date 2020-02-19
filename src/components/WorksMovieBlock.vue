<template>
  <div id="worksBox" class="worksArea_box" :class='{active:showModal}'>
    <div class="worksArea_box--list worksMovie" v-observe-visibility="visibilityChangedWorksMovie02" :class='{active:isVisibleWorksMovie02}'>
      <button href="#" v-on:click='showModal02=!showModal02; showModal=!showModal'>
        <div class="playPic">
          <img class="playIcn" src="@/assets/icn_play.png"/>
          <img src="@/assets/works_movie01.jpg"/>
        </div>
        <p>TEMPLATE 1 “CLASSIC”</p>
        <p>MOVIE</p>
      </button>
    </div>
    <div class="worksArea_box--list" v-observe-visibility="visibilityChangedWorksMovie01" :class='{active:isVisibleWorksMovie01}'>
      <button href="#" v-on:click='showModal01=!showModal01; showModal=!showModal'>
        <div class="playPic">
          <img src="@/assets/works_movie_jacket.png"/>
        </div>
        <p>JACKET & LABEL</p>
        <p>DESIGN</p>
      </button>
    </div>

    <transition name="modal">
      <div class="modal" v-if='showModal02'>
        <div class="modal_inner">
          <youtube :video-id="videoId01" />
          <a class="close" href="#" v-on:click='click02'>
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
          </a>
        </div>
      </div>

      <div class="modal modalJacket" v-if='showModal01'>
        <div class="modal_inner">
          <img src="@/assets/works_movie_jacket_L.png"/>
          <a class="close" href="#" v-on:click='click01'>
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        videoId01: 'asClLtu2k1M',
        isVisibleWorksMovie01: false,
        isVisibleWorksMovie02: false,
        showModal01: false,
        showModal02: false
      }
    },
    methods: {
      visibilityChangedWorksMovie01(isVisibleWorksMovie01) {
        this.isVisibleWorksMovie01 = isVisibleWorksMovie01
      },
      visibilityChangedWorksMovie02(isVisibleWorksMovie02) {
        this.isVisibleWorksMovie02 = isVisibleWorksMovie02
      },
      click01: function (ev) {
        this.showModal = false,
        this.showModal01 = false
        ev.preventDefault()
      },
      click02: function (ev) {
        this.showModal = false,
        this.showModal02 = false
        ev.preventDefault()
      }
    }
  }
</script>