<template>
  <div :class="`container__${type}`">
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        enum: ['large', 'small', 'centered'],
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
  padding: 0px 304px 0 396px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.container__centered {
    max-width: 1440px;
  padding: 0px 308px 0 308px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}
</style>
