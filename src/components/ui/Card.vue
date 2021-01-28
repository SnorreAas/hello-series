<script>
export default {
  name: 'Card',
  props: {
    name: {
      type: String,
      defailt: ''
    },
    genres: {
      type: Array,
      defailt: () => []
    },
    rating: {
      type: Number,
      defailt: 0
    },
    image: {
      type: Object,
      defailt: () => []
    },
    apiData: {
      type: Object,
      defailt: () => []
    },
  },
  computed: {
    computedImage() {
      if(this.image && this.image.original) {
        return this.image.original
      }
      return `${require('../../assets/no-image.png')}`
    }
  },
  methods: {
    openOverlay(data) {
      this.$emit('card', data)
      const el = document.getElementById("overlay")
      el.classList.add('active')
    }
  }
}
</script>

<template>
  <div class="Card">
    <div class="Card__image smooth-transition" :style="{backgroundImage: 'url('+ computedImage +')'}" />
    <div class="Card__content">
      <h2>{{name}}</h2>
      <div class="genres">
        <p v-for="(item, index) in genres" :key="index">
          {{item}}
        </p>
      </div>
    </div>
    <div class="rating"><p>{{rating}}</p></div>
    <div class="open-overlay" @click="openOverlay(apiData)" />
  </div>
</template>

<style lang="sass" scoped>
  .Card
    margin-bottom: 60px
    width: 185px
    margin: 0 auto
    position: relative
    &:hover
      .Card__image
        clip-path: inset(0 0 0 0)
    .open-overlay
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background: transparent
    .rating
      position: absolute
      top: 0
      right: 0
      background: yellow
      border-radius: 50%
      width: 25px
      height: 25px
      font-size: 12px
      text-align: center
      p
        position: absolute
        transform: translate(-50%, -50%)
        top: 48%
        left: 50%

    &__image
      width: 185px
      height: 270px
      overflow: hidden
      box-shadow: 0 5px 10px rgba(0,0,0,0.8)
      background-size: cover
      background-repeat: no-repeat
      background-position: center center
      clip-path: inset(5px 5px 5px 5px)

    &__content
      display: block
      padding: 0 5px
      h2
        margin-top: 15px
        color: #fff
        font-size: 18px
      .genres
        display: flex
        p
          margin-right: 3px
          color: #c4c4c4
          font-size: 12px

    .smooth-transition
      -webkit-transition: clip-path 220ms ease-in-out
      -moz-transition: clip-path 220ms ease-in-out
      -ms-transition: clip-path 220ms ease-in-out
      -o-transition: clip-path 220ms ease-in-out
      transition: clip-path 220ms ease-in-out
</style>