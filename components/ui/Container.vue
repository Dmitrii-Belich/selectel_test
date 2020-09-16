<template>
  <div :class="['container', `container__${type}`]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      enum: ["large", "small", "centered"],
      default: "large",
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}
.container__large {
  padding: 0px 64px;
}

.container__small {
  padding: 0px 304px 0 396px;
}

.container__centered {
  padding: 0px 308px 0;
}

@media screen and (max-width: 1280px) {
.container__centered {
  padding: 0px 140px 0;
}
.container__small {
  padding: 0px 145px 0 140px;
}
}

@media screen and (max-width: 768px) {
  .container__large {
  padding: 0px 16px;
}


}

@media screen and (max-width: 660px) {
.container__centered {
  padding: 0px 16px 0;
}
.container__small {
  padding: 0px 16px 0;
}
}
</style>
