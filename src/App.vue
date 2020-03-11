<template>
<div>
  <router-view></router-view>
  <FooterGuide></FooterGuide>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  mounted () {

  },
  data () {
    return {

    }
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" ref="stylus">

</style>
