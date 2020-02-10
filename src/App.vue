<template>
  <div id="app">
    <header v-bind:class='{active:isActive01}'>
      <button class="btn_menu" v-on:click='isActive01=!isActive01'>
        <span class="bar bar1" v-scroll="handleScroll"></span>
        <span class="bar bar2" v-scroll="handleScroll"></span>
        <span class="bar bar3" v-scroll="handleScroll"></span>
      </button>
      <div class="headerInner" v-observe-visibility="visibilityChangedMenu" v-bind:class='{active:isVisibleMenu}'>
        <div class="headerInner_ttl" v-on:click='isActive01=!isActive01'>
          <router-link to="/">RYO NAGANUMA</router-link>
        </div>
        <ul>
          <li v-on:click='isActive01=!isActive01'>
            <router-link to="/about/">
              ABOUT ME
            </router-link>
          </li>
          <li v-on:click='isActive01=!isActive01'>
            <router-link to="/works/">
              WORKS
            </router-link>
          </li>
          <li v-on:click='isActive01=!isActive01'>
            <router-link to="/contact/">
              CONTACT
            </router-link>
          </li>
        </ul>
        <div class="headerInner_icn">
          <div class="headerInner_icn--sns">
            <a href="https://twitter.com/ryo_naganuma" target="_blank">
              <img src="@/assets/icn_tw.png">
            </a>
          </div>
          <div class="headerInner_icn--sns">
            <router-link to="/contact/">
              <img src="@/assets/icn_mail.png">
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <router-view/>

    <footer>
      <div class="footer_icn">
        <div class="footer_icn--sns">
          <a href="https://twitter.com/ryo_naganuma" target="_blank">
            <img src="@/assets/icn_tw.png">
          </a>
        </div>
        <div class="footer_icn--sns">
          <router-link to="/contact/">
            <img src="@/assets/icn_mail.png">
          </router-link>
        </div>
      </div>
      <p>©2020 RYO NAGANUMA</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      isActive01: false,
      isVisibleMenu: false
    }
  },
  methods: {
    visibilityChangedMenu(isVisibleMenu) {
      this.isVisibleMenu = isVisibleMenu
    },
    handleScroll: function (evt, el) {
      if (window.scrollY > 299) {
        el.setAttribute(
          'style',
          'background-color: #2E3C7B; transition: all .3s;'
        )
      } else{
        el.setAttribute(
          'style',
          'background-color: #fff; transition: all .3s;'
        )
      }
    }
  }
}
</script>