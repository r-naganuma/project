<template>
  <div class="aboutArea_box">
    <div class="aboutArea_box--list">
      <router-link to="/works/">
        <div class="aboutIcn">
          <img src="../assets/icn_design.png">
          <p>WEB DISIGN</p>
        </div>
        <p class="aboutTxt">
          与件を理解した上で、最適なデザインを考え、提案いたします。クライアントとエンジニア双方の気持ちを理解し、丁寧なデザインを心がけております。
        </p>
      </router-link>
    </div>
    <div class="aboutArea_box--list">
      <router-link to="/works/">
        <div class="aboutIcn">
          <img src="../assets/icn_coding.png">
          <p>CODING</p>
        </div>
        <p class="aboutTxt">
          目的実現のための最適なコーディングをいたします。レスポンシブやwordpressによるCMS化、javascriptを用いたアニメーションにも対応いたします。
        </p>
      </router-link>
    </div>
    <div class="aboutArea_box--list">
      <router-link to="/works/">
        <div class="aboutIcn">
          <img src="../assets/icn_movie.png">
          <p>WEDDING MOVIE</p>
        </div>
        <p class="aboutTxt">
          結婚式のムービーを作成いたします。いくつかのテンプレートの中から選んでいただき、写真とコメントをいただくだけで完成します。
        </p>
      </router-link>
    </div>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script>
export default {
  name: 'AboutBlock',
  mounted() {
    $('.aboutArea_box--list a').hover(
    function() {
      $(this).removeClass('noActive');
      $(this).addClass('active');
      $(this).children('.aboutTxt').fadeIn(150);
    },
    function() {
      $(this).removeClass('active');
      $(this).addClass('noActive');
      $(this).children('.aboutTxt').fadeOut(150);
    });
  }
}
</script>