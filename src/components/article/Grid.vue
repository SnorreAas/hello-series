
<script>
export default {
  name: 'Grid'
}
</script>

<template>
  <div class="Grid">
    <slot />
  </div>
</template>

<style lang="sass">
  .Grid
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
    grid-gap: 20px
    margin-bottom: 50px
    margin-top: 20px
    @media screen and (max-width: 400px)
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))
      grid-gap: 10px

</style>
