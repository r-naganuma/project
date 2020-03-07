<template>
	<article id="a404">
		<section>
			<p>404</p>
			<img src="@/assets/pic_naganuma.jpg">
		</section>
	</article>
</template>

<script>
export default {
	name: '404',
	data(){
		return {
			isVisibleTtl: false,
			title: 'NOT FOUND'
		}
	},
  head: {
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'robots', content: 'noindex,nofollow' }
    ]
  }
}
</script>