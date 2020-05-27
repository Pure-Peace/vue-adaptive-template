<template>
  <div>
    额
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
  },
  methods: {

    getNumbFormated (num) {
      const done = (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      return done
    }
  }
}
</script>

<style scoped>

</style>
