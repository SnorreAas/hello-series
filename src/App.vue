
<script>
import Sidebar from './components/layout/Sidebar'
import Main from './components/layout/Main'
export default {
  name: 'App',
  components: {
    Sidebar,
    Main
  },
  data() {
    return {
      activeData: 'Browse all',
      apiData: []
    }
  },
  computed: {
    computedApiData() {
      return this.apiData
    },
    computedActiveData() {
      return this.activeData
    }
  },
  methods: {
    setActiveData(value) {
      this.activeData = value
      this.fetchApiData(this.apiData)
    },
    fetchApiData(array) {
      if(this.activeData === 'Browse all') {
        this.axios.get("http://api.tvmaze.com/shows")
        .then (function(response){ 
          console.log(response.data[0])
          array.push(response.data)
        })
      }
      else {
        this.axios.get(`http://api.tvmaze.com/search/shows?genres=:${this.computedActiveData}`)
        .then (function(response){ 
          console.log(response.data[0].name)
          array.push(response.data)
        })
      }
    }
  },
  created() {
    this.fetchApiData(this.apiData)
  }
}
</script>

<template>
  <div class="Page">
    <div class="Page__content">
      <Sidebar @clicked="setActiveData" />
      <Main :active-data="computedActiveData" />
    </div>
  </div>
</template>

<style lang="sass">
  .Page
    width: 100%
    height: 100vh
    background: linear-gradient(to right top, #182025, #5e7d8f)
    &__content
      display: flex
      max-width: 1400px
      margin: 0 auto
      height: 100%
</style>
