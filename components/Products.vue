<template>
  <!-- eslint-disable vue/no-v-html -->
  <section class="products">
    <container
      type="centered"
      class="products__container"
    >
      <h2
        class="products__title"
        v-html="productsData.title"
      />
      <p
        class="products__subtitle"
        v-html="productsData.subtitle"
      />
      <ul class="products__grid-container">
        <product
          v-for="item in productsData.items"
          :key="item.id"
          :link="item.link"
          :title="item.title"
          :description="item.description"
        />
      </ul>
    </container>
  </section>
</template>

<script>
import container from "@/components/ui/container";
import product from "@/components/ui/product";
export default {
  components: {
    container,
    product,
  },
  computed: {
    productsData() {
      return this.$store.getters["blocks/getProducts"];
    },
  },
};
</script>

<style scoped>
.products {
  background: rgba(217, 217, 214, 0.3);
  display: flex;
  padding: 48px 0 80px;
  color: #092433;
}

.products__title {
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  margin-bottom: 16px;
}

.products__subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 32px;
}

.products__grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 16px;
}

@media screen and (max-width: 880px) {

  .products__grid-container {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 8px;
  }
}

@media screen and (max-width: 500px) {

  .products__title {
    font-size: 22px;
    line-height: 28px;
  }
  
  .products__subtitle {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
