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
      <h1>{{activeFilter}}</h1>
      <input placeholder="Search for series..." v-model="searchString" @input="sendSearch"/>
    </div>
    <SeriesGrid>
      <div 
        v-for="(item, index) in seriesToShow"
        :key="index"
      >
        <Card
          v-if="apiData[0]"
          :name="apiData[0][index].name"
          :image="apiData[0][index].image.original"
          :genres="apiData[0][index].genres"
          :rating="apiData[0][index].rating.average"
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
      v-else
      class="mt-20 text-center"
    >
      
      <p>
        You have reached the end!
      </p>
    </div>
  </main>
</template>

<style lang="sass" scoped>
  main
    display: block
    width: 100%
    padding-left: 50px

    .header
      padding: 24px 30px 24px 0
      display: flex
      justify-content: space-between
      h1
        color: #fff
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