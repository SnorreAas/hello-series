<script>
export default {
  name: 'Main',
  props: {
    activeData: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <main>
    <div class="header">
      <h1>{{activeData}}</h1>
    </div>
    <div class="grid">
      
    </div>
  </main>
</template>

<style lang="sass" scoped>
  main
    display: block
    width: 100%
    padding-left: 50px

    .header
      padding: 24px 0
      h1
        color: #fff
        font-size: 20px
        margin: auto 0

</style>