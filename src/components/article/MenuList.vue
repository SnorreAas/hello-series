<script>
export default {
  name: 'MenuList',
  props: {
    listData: {
      type: [Object, Array],
      default: () => {}
    }
  },
  methods: {
    sendData(value) {
      this.$emit('clicked', value)
    },
    errorMsg(msg) {
      alert(msg)
    },
  }
}
</script>

<template>
  <div class="MenuList">
    <div 
      v-for="(item, index) in listData"
      :key="index"
      class="MenuList__item"
    >
      <hr v-if="item.title && index > 1" />
      <p class="title" v-if="item.title">
        {{item.name}}
      </p>
      <div v-else class="MenuList__item__wrapper">
        <button @click=" !item.disabled ? sendData(item.name) : errorMsg('This feature is coming soon')" :title="item.disabled ? 'This option is coming soon' : ''">
          {{item.name}}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .MenuList
    &__item
      hr
        margin: 20px 0 20px 10px
        border: 1px solid #3f5360
        // figures out if I want this
        border: 1px solid transparent
      .title
        text-transform: uppercase
        letter-spacing: 3px
        color: #c5d1d9
        padding: 12px 12px 12px 42px
        margin-bottom: 10px
      &__wrapper
        padding-left: 35px
        border-left: 2px solid transparent
        // transition: 0.1s
        &:hover, &:active
          background: #3f5360
          border-left: 2px solid #269175
          button
            color: #fff
        button
          all: unset
          cursor: pointer
          padding: 12px 12px
          color: #c5d1d9
          width: 100%


        
</style>