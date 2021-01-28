<script>
import SeriesGrid from '../article/Grid'
import Card from '../ui/Card'

export default {
  name: 'Main',
  components: {
    SeriesGrid,
    Card
  },
  props: {
    activeFilter: {
      type: String,
      default: ''
    },
    apiData: {
      type: [Array],
      default: () => {}
    },
    dataLength: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      searchString: '',
      seriesToShow: 25
    }
  },
  methods: {
    sendOverlayData(data) {
      this.$emit('card', data)
    },
    sendSearch() {
      this.$emit('search', this.searchString)
    },
    incrementListing (increment) {
      if (this.seriesToShow + increment < this.dataLength) {
        return increment
      } else {
        return this.dataLength - this.seriesToShow
      }
    }
  }
}
</script>

<template>
  <main>
    <div class="header">
      <h1 class="text-blue-400">{{activeFilter}}</h1>
      <input placeholder="Search for series..." v-model="searchString" @input="sendSearch" @keydown.enter.prevent="sendSearch"/>
    </div>
    <SeriesGrid>
      <div 
        v-for="(item, index) in seriesToShow"
        :key="index"
        class="cursor-pointer"
      >
        <Card
          v-if="apiData && apiData[index]"
          :name="apiData[index].name"
          :image="apiData[index].image"
          :genres="apiData[index].genres"
          :rating="apiData[index].rating.average"
          :api-data="apiData[index]"
          @card="sendOverlayData"
        />
      </div>
    </SeriesGrid>
    <div v-if="seriesToShow < dataLength">
      <button
        class="flex px-10 py-2 mx-auto mt-20 bg-transparent border-2 border-gray-100 rounded-lg"
        @click="seriesToShow += incrementListing(25)"
      >
        <p class="mx-auto text-xl font-bold text-gray-100">
          Load More
        </p>
      </button>
    </div>
    <div
      v-else-if="seriesToShow > dataLength && dataLength !== 0"
      class="mt-20 text-center"
    >
      <p class="text-white">
        You have reached the end!
      </p>
    </div>
    <div
      v-else
      class="mt-20 text-center"
    >
      <p class="text-white">
        Are you sure series with name: <span class="text-blue-400">{{searchString}}</span> exists?
      </p>
    </div>
  </main>
</template>

<style lang="sass" scoped>
  main
    display: block
    width: 100%
    padding-left: 15px
    padding-right: 15px
    position: relative
    @media screen and (max-width: 889px)
      margin: 0 auto
      max-width: 800px

    .header
      padding: 24px 15px
      display: flex
      justify-content: space-between
      h1
        font-size: 20px
        margin: auto 0
      input
        all: unset
        border: 1px solid #3f5360
        background: #3f5360
        border-radius: 4px
        color: #fff
        padding: 0 20px


</style>