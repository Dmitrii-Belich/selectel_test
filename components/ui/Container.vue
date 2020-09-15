<template>
  <div :class="`container__${type}`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        enum: ['large', 'small'],
        default: 'large',
      }
    }
  }
</script>

<style scoped>
.container__large {
  max-width: 1440px;
  padding: 0px 64px;
  margin: 0 auto;
  width: 100%;
box-sizing: border-box;
}

.container__small {
  max-width: 1440px;
  padding: 0px 308px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}
</style>
