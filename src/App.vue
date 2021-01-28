
<script>
import Sidebar from './components/layout/Sidebar'
import Main from './components/layout/Main'
import InfoOverlay from './components/ui/InfoOverlay'

export default {
  name: 'App',
  components: {
    Sidebar,
    Main,
    InfoOverlay
  },
  data() {
    return {
      activeFilter: 'Browse all',
      apiData: [],
      searchString: '',
      overlayData: []
    }
  },
  methods: {
    setOverlaydata(data) {
      this.overlayData = data
    },
    setSearchString(value) {
      this.searchString = value
      this.apiData = []
      this.fetchApiData(this.apiData, this.activeFilter, value)
    },
    resetSearchString() {
      if(this.searchString) {
        return this.searchString = ""
      }
    },
    setactiveFilter(value) {
      this.activeFilter = value
      this.apiData = []
      this.fetchApiData(this.apiData, this.activeFilter)
    },
    fetchApiData(array, filter, search) {
      let apiString = '' 
      if(search) {
        apiString = `http://api.tvmaze.com/search/shows?q=${this.searchString}`
        this.axios.get(apiString)
        .then (function(response){
          if(filter !== 'Browse all') {
            for (var i = 0; i < response.data.length; i++) {
              if(response.data[i].show.genres.includes(filter)) {
                array.push(response.data[i].show)
              }
            }
          }
          else {
            for (var j = 0; j < response.data.length; j++) {
              array.push(response.data[j].show)
            }
          }
        })
      }
      else {
        apiString = `http://api.tvmaze.com/shows`
        this.axios.get(apiString)
        .then (function(response){
          if(filter !== 'Browse all') {
            for (var i = 0; i < response.data.length; i++) {
              var id = Object.keys(response.data)[i]
              if(response.data[id].genres.includes(filter)) {
                array.push(response.data[id])
              }
            }
          }
          else {
            for (var j = 0; j < response.data.length; j++) {
              var key = Object.keys(response.data)[j]
              array.push(response.data[key])
            }
          }
        })
      }
    }
  },
  mounted() {
    // Load initial set of data
    this.fetchApiData(this.apiData, this.activeFilter, this.searchString)
  }
}
</script>

<template>
  <div class="Page">
    <div class="Page__content">
      <Sidebar @clicked="setactiveFilter" />
      <Main 
        :active-filter="activeFilter" 
        :api-data="apiData"
        :data-length="apiData.length"
        @search="setSearchString"
        @card="setOverlaydata"
      />
      <InfoOverlay :data="overlayData" />
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
