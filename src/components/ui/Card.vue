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
      type: String,
      defailt: ''
    }
  }
}
</script>

<template>
  <div class="Card">
    <div class="Card__image" :style="{backgroundImage: 'url('+ image +')'}" />
    <div class="Card__content">
      <h2>{{name}}</h2>
      <div class="genres">
        <p v-for="(item, index) in genres" :key="index">
          {{item}}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .Card
    margin-bottom: 60px
    &__image
      // margin: 20px
      width: 180px
      height: 270px
      overflow: hidden
      box-shadow: 0 5px 10px rgba(0,0,0,0.8)
      background-size: cover
      background-repeat: no-repeat
      background-position: center center

    &__content
      display: block
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
</style>