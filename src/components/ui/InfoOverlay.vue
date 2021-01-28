<script>
import vClickOutside from 'v-click-outside'
import InfoCard from './InfoCard'

export default {
  name: 'InfoOverlay',
  components: {
    InfoCard
  },
  props: {
    data: {
      type: [Array, Object],
      default: () => {}
    }
  },
  directives:{
    clickOutside: vClickOutside.directive
  },
  methods: {
    externalClick (event) {
      if(event.target.className === 'open-overlay') {
        console.log(this.data)
        return null
      }
      else {
        const el = document.getElementById("overlay")
        el.classList.remove('active')
      }
    }
  }
}
</script>

<template>
  <div class="overlay" id="overlay">
    <div class="overlay__wrapper" v-click-outside="externalClick">
      <InfoCard :data="data" />
    </div>
  </div>
</template>

<style lang="sass">

  .active
    opacity: 1!important
    pointer-events: auto!important

  .overlay
    opacity: 0
    pointer-events: none
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 10
    background-color: rgba(0,0,0,.7)

    &__wrapper
      position: absolute
      background: #ffffff
      transform: translate(-50%, -50%)
      max-width: 650px
      height: auto
      width: 100%
      left: 50%
      top: 40%
      border-radius: 8px
      box-shadow: 13px 15px 79px 6px rgba(0,0,0,0.5)

</style>
