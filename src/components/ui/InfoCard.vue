<script>
export default {
  name: 'InfoCard',
  props: {
    data: {
      type: [Array, Object],
      default: () => {}
    }
  },
  computed: {
    name() {
      if(this.data.name) {
        return this.data.name
      }
      return 'Title not found'
    },
    genres() {
      if(this.data.genres) {
        return this.data.genres
      }
      return []
    },
    premiered() {
      if(this.data.premiered) {
        return this.data.premiered
      }
      return 'unknown date'
    },
    url() {
      if(this.data.url) {
        return this.data.url
      }
      return ''
    },
    officialSite() {
      if(this.data.officialSite) {
        return this.data.officialSite
      }
      return ''
    },
    runtime() {
      if(this.data.runtime) {
        return this.data.runtime
      }
      return 'Title not found'
    },
    rating() {
      if(this.data.rating) {
        return this.data.rating.average
      }
      return 'Nan'
    },
    description() {
      if(this.data.summary) {
        return this.data.summary
      }
      return 'This series has no summary...'
    },
    computedImage() {
      if(this.data.image && this.data.image.original) {
        return this.data.image.original
      }
      return `${require('../../assets/no-image.png')}`
    }
  }
}
</script>

<template>
  <div class="card">
    <section class="movie_image">
      <img class="movie_poster" :src="computedImage" :alt="name" />
    </section>

    <section class="center">
      <div class="about_movie">
        <div class="rating">{{rating}}</div>
        <h3 class="text-blue-400">{{name}}</h3>
        <div class="movie_info">
          <p>Premiered: {{new Date(premiered).toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }) + ' - '}}</p>
          <p>{{runtime + 'min,'}}</p>
          <p v-for="(item, index) in genres" :key="index">
            {{item}}
          </p>
        </div>
        <div class="movie_desc">
          <p v-html="description"></p>
        </div>
        <a class="watch" :href="url"> 
          Watch Now!
        </a>
        <a class="watchlist" :href="officialSite">
          Go to official site!
        </a>
      </div>
    </section>
    <svg class="wavy" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
      <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="stroke: none;"></path>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    background: linear-gradient(to right top, #182025, #5e7d8f);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 100%;
    max-width: 100%;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    @media (max-width: 520px) {
      display: flex;
      max-height: 600px;
      flex-direction: column;
      height: auto;
      box-shadow: 4px 4px 10px rgba(255, 255, 255, .2);
    }
    .movie_image {
      min-width: 200px;
      padding: 0px 10px;
      display: flex;
      position: relative;
      z-index: 99;
      @media (max-width: 520px) {
        display: flex;
        flex-basis: auto;
        margin: 0 auto;
        max-height: 200px;
        padding: 0 0;
        margin-bottom: 15px;
        overflow: hidden;
      }
      .movie_poster {
        max-width: 100%;
        height: auto;
        margin: auto;
      }
    }
    .center {
      display: flex;
      align-items: center;
      vertical-align: center;
      position: relative;
      z-index: 99;
      @media (max-width: 520px) {
        padding: 10px 0px;
      }
    }
    .about_movie {
      flex-basis: 100%;
      padding: 20px;
      position: relative;
      z-index: 99;
      @media (max-width: 520px) {
        align-items: center;
        text-align: center;
      }
      .rating {
        display: table-cell;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: yellow;
        text-align: center;
        align-items: center;
        vertical-align: middle;
        line-height: normal;
        @media (max-width: 520px) {
          position: absolute;
          top: 0;
          left: 20px;
          display: inline-grid;
        }
      }
      h3 {
        font-size: 25px;
        margin-bottom: 10px;
        margin-top: 10px;
        text-align: left;
        @media (max-width: 520px) {
          text-align: center;
        }
      }
      .movie_info {
        display: flex;
        flex-wrap:wrap;
        p {
          margin-right: 5px;
        }
        @media (max-width: 520px) {
          justify-content: space-around;
        }
        font-size: 14px;
        color: rgba(255, 255, 255, .6);
      }
      .movie_desc {
        font-size: 16px;
        margin-top: 25px;
        margin-bottom: 25px;
        color: rgba(255, 255, 255, 1);
        position: relative;
        z-index: 99;
        overflow-y: scroll;
        max-height: 300px;
        @media (max-width: 520px) {
          max-height: 150px;
        }
      }
    }
    /* wawy svg */
    .wavy {
      position: absolute;
      bottom: calc(0px);
      fill: #001530;
      transform: rotate(180deg);
      z-index: 0;
    }
    .watch {
      position: relative;
      z-index: 99;
      background: rgba(255, 255, 255, .3);
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 5px 10px;
      outline: none;
      cursor: pointer;
      font-size: 15px;
      transition: all .3s;
      &:hover {
        background: rgba(255, 255, 255, .2);
      }
      svg {
        width: 15px;
        height: 15px;
        position: relative;
        top: 2px;
        fill: #fff;
      }
    }
    .watchlist {
      position: relative;
      z-index: 99;
      background: transparent;
      color: rgba(255, 255, 255, .9);
      border: none;
      border-radius: 4px;
      padding: 5px 10px;
      outline: none;
      cursor: pointer;
      font-size: 15px;
      transition: all .3s;
      &:hover {
        color: rgba(255, 255, 255, 1);
      }
      svg {
        width: 15px;
        height: 15px;
        position: relative;
        top: 2px;
        fill: rgba(255, 255, 255, 1);
      }
    }
  }
</style>