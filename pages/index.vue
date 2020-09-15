<template>
  <main class="container">
    <advantages />
    <products />
    <faq />
  </main>
</template>

<script>
import Advantages from "@/components/Advantages"
import Products from "@/components/Products"
import Faq from '@/components/Faq'
export default {
  components: {
    faq: Faq,
    products: Products,
    advantages: Advantages,
  }
}
</script>

<style>

</style>
