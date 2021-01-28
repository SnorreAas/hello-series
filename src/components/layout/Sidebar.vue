<script>
import MenuList from '../article/MenuList'

export default {
  name: 'Sidebar',
  components: {
    MenuList
  },
  data() {
    return {
      menuData: [
        {name: 'Discover', title: true},
        {name: 'Top Rated Series', disabled: true},
        {name: 'Genres', title: true},
        {name: 'Action'},
        {name: 'Comedy'},
        {name: 'Crime'},
        {name: 'Drama'},
        {name: 'Horror'},
        {name: 'Romance'},
        {name: 'Science-Fiction'},
        {name: 'Thriller'},
        {name: 'Remove filters', title: true},
        {name: 'Browse all'},
      ]
    }
  },
  computed: {
    computedImage() {
      return `${require('../../assets/popcorn-3.png')}`
    }
  },
  methods: {
    sendData(value) {
      this.$emit('clicked', value)
    }
  }
}
</script>

<template>
  <div class="Sidebar">
    <div class="Logo">
      <div class="image" @click="sendData('Browse all')" :style="{backgroundImage: 'url('+ computedImage +')'}"></div>
    </div>
    <MenuList @clicked="sendData" :list-data="menuData" />
  </div>
</template>

<style lang="sass" scoped>
  .Sidebar
    height: 100vh
    width: 320px
    @media screen and (max-width: 925px)
      position: absolute
      top: 0
      left: -320px
    .Logo
      width: 100%
      height: 100px
      padding-left: 22px
      padding-top: 20px
      margin-bottom: 50px
      border-right: 1px solid #567283
      .image
        width: 180px
        height: 87px
        background-size: cover
        background-repeat: no-repeat
        background-position: center center
        cursor: pointer


</style>