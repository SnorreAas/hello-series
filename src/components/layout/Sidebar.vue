<script>
import MenuList from '../article/MenuList'

export default {
  name: 'Sidebar',
  components: {
    MenuList
  },
  data() {
    return {
      test: [
        {name: 'Discover', title: true},
        {name: 'Top Rated Series'},
        {name: 'Genres', title: true},
        {name: 'Action'},
        {name: 'Comedy'},
        {name: 'Crime'},
        {name: 'Drama'},
        {name: 'Horror'},
        {name: 'Romance'},
        {name: 'Science-Fiction'},
        {name: 'Thriller'},
      ]
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
      <h1 @click="sendData('Browse all')">Hello Series</h1>
    </div>
    <MenuList @clicked="sendData" :list-data="test" />
  </div>
</template>

<style lang="sass" scoped>
  .Sidebar
    height: 100%
    width: 320px
    @media screen and (max-width: 925px)
      position: absolute
      top: 0
      left: -320px
    .Logo
      width: 100%
      height: 100px
      padding-left: 42px
      padding-top: 20px
      margin-bottom: 20px
      border-right: 1px solid #567283
      h1
        color: #fff
        font-size: 26px
        cursor: pointer

</style>