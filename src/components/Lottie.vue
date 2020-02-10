<template>
<h1 id="bodymovin" ref="lavContainer"></h1>
</template>

<script>
import lottie from 'lottie-web';
export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData.default,  // ここだけ変更何故かデフォルトを入れないと動かなかった… (要検証)
      rendererSettings: this.options.rendererSettings
    });
    this.$emit('animCreated', this.anim)
  }
}
</script>