
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
      activeFilter: 'Browse all',
      apiData: [],
      searchString: ''
    }
  },
  methods: {
    setSearchString(value) {
      this.searchString = value
      this.fetchApiData(this.apiData, this.activeFilter, value)
    },
    resetSearchString() {
      if(this.searchString) {
        return this.searchString = ""
      }
    },
    setactiveFilter(value) {
      this.activeFilter = value
      this.fetchApiData(this.apiData, this.activeFilter)
    },
    fetchApiData(array, filter, search) {
      // TODO: change this so it checks if activeFilter is set or
      let apiString = '' 
      if(search) {
        apiString = `http://api.tvmaze.com/search/shows?q=${this.searchString}`
        this.axios.get(apiString)
        .then (function(response){
          // for (var i = 0; i < response.data.length; i++) {
          //   var id = Object.keys(response.data)[i]
          //   if(response.data[id].genre.includes(filter)) {
          //     console.log("Match found")
          //   }
          // }
          console.log(response.data)
          // console.log(search)
          if(response && response.data && response.data[0]) {
            array.push(response.data)
          }
        })
      }
      else {
        apiString = `http://api.tvmaze.com/shows`
        this.axios.get(apiString)
        .then (function(response){
          // for (var i = 0; i < response.data.length; i++) {
          //   var id = Object.keys(response.data)[i]
          //   if(response.data[id].genre.includes(filter)) {
          //     console.log("Match found")
          //   }
          // }
          console.log(filter)
          console.log(response.data)
          array.push(response.data)
        })
      }
    }
  },
  // mounted() {
  //   this.fetchApiData(this.apiData, this.activeFilter)
  // }
}
</script>

<template>
  <div class="Page">
    <div class="Page__content">
      <Sidebar @clicked="setactiveFilter" />
      <Main 
        :active-filter="activeFilter" 
        :api-data="apiData"
        :data-length="apiData && apiData[0] ? apiData[0].length : 0"
        @search="setSearchString" 
      />
    </div>
  </div>
</template>

<style lang="sass">
  .Page
    width: 100%
    height: auto
    background: linear-gradient(to right top, #182025, #5e7d8f)
    &__content
      display: flex
      max-width: 1400px
      margin: 0 auto
      height: 100%
      padding-bottom: 50px
</style>
