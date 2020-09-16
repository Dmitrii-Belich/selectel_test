<template>
  <main class="container">
<!--     <banners />
    <promoblock />
    <advantages />
    <products />
    <faq /> -->
  </main>
</template>

<script>
import Banners from "@/components/Banners"
import PromoBlock from "@/components/PromoBlock";
import Advantages from "@/components/Advantages";
import Products from "@/components/Products";
import Faq from '@/components/Faq';
export default {
  components: {
    faq: Faq,
    products: Products,
    advantages: Advantages,
    promoblock: PromoBlock,
    banners: Banners,
  }
}
</script>

<style>
.container {
  color: #092433;
}
</style>
