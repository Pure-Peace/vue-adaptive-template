<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    type: {
      type: String,
      required: true
    },
    extraClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.type}`
    },
    svgClass () {
      return this.extraClass ? 'svg-icon ' + this.extraClass : 'svg-icon'
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  font-size: 1.2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
