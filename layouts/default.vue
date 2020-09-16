<template>
  <div>
    <main-header />
    <Nuxt />
    <main-footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    "main-header": Header,
    "main-footer": Footer,
  },
  async middleware({ store }) {
    await store.dispatch('blocks/fetchBlocks');
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  border: none;
  outline: none;
}

html {
  min-width: 320px;
  font-family: "Manrope", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

</style>
