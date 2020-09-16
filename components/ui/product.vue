<template>
  <!-- eslint-disable vue/no-v-html -->
  <li class="product">
    <a
      class="product__link"
      :href="link"
    >
      <h3
        class="product__title"
        v-html="title"
      />
      <p
        class="product__description"
        v-html="description"
      />
    </a>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.product {
  background: #fff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 24px 24px 32px;
  transition: all ease 0.3s;
  box-sizing: border-box;
  border: 1px solid #fff;
}

.product:hover {
  transform: scale(1.03);
  cursor: pointer;
  border: 1px solid #eb4247;
}

.product:hover  .product__title {
  color: #eb4247;
}

.product__link {
  color: inherit;
  text-decoration: none;
}

.product__title {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 12px;
}

.product__description {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
}
@media screen and (max-width: 880px) {

  .product {
    padding: 16px 81px 24px;
  }
}

@media screen and (max-width: 660px) {

  .product {
    padding: 16px 24px 24px;
  }
}

@media screen and (max-width: 500px) {

  .product__title {
    font-size: 18px;
    line-height: 24px;
  }

  .product__description {
    font-size: 12px;
    line-height: 15px;
  }
}
</style>
