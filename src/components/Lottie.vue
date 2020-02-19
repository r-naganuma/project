<template>
<h1 id="bodymovin" ref="lottieRef"></h1>
</template>

<script>
import lottie from 'lottie-web';
export default {
  props: {
    options: {
      type: Object,
    }
  },
  mounted () {
    this.lottie = lottie.loadAnimation({
      container: this.$refs.lottieRef,
      renderer: 'svg',
      loop:  false,
      autoplay: false,
      animationData: this.options.lottieData.default,
    });
    this.$emit('lottieCreated', this.lottie)
  }
}
</script>