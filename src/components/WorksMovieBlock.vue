<template>
  <div id="worksBox" class="worksArea_box">
    <div class="worksArea_box--list worksMovie" v-observe-visibility="visibilityChangedWorksMovie01" :class='{active:isVisibleWorksMovie01}'>
      <a href="http://traction.tokyo/leonard/" target="_blank">
        <div class="playPic">
          <img class="playIcn" src="@/assets/icn_play.png"/>
          <img src="@/assets/works_movie01.jpg"/>
        </div>
        <p>TEMPLATE 1 “FILM”</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        isVisibleWorksMovie01: false
      }
    },
    methods: {
      visibilityChangedWorksMovie01(isVisibleWorksMovie01) {
        this.isVisibleWorksMovie01 = isVisibleWorksMovie01
      }
    }
  }
</script>