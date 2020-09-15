<template>
  <main class="container">
    <promoblock />
    <advantages />
    <products />
    <faq />
  </main>
</template>

<script>
import PromoBlock from "@/components/PromoBlock"
import Advantages from "@/components/Advantages";
import Products from "@/components/Products";
import Faq from '@/components/Faq';
export default {
  components: {
    faq: Faq,
    products: Products,
    advantages: Advantages,
    promoblock: PromoBlock,
  }
}
</script>

<style>
.container {
  color: #092433;
}
</style>
