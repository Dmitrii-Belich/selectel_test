<template>
  <!-- eslint-disable vue/no-v-html -->
  <section class="promo">
    <container class="promo__container">
      <h2
        class="promo__title"
        v-html="promoData.title"
      />
      <div class="promo__wrapper">
        <p
          class="promo__subtitle"
          v-html="promoData.subtitle"
        />
        <mainbutton
          class="promo__button"
          :link="promoData.button.link"
          :text="promoData.button.text"
        />
      </div>
    </container>
  </section>
</template>

<script>
import container from "@/components/ui/container";
import mainbutton from "@/components/ui/mainbutton";
export default {
  components: {
    container,
    mainbutton,
  },
  computed: {
    promoData() {
      return this.$store.getters["blocks/getPromoBlock"];
    },
  },
};
</script>

<style  scoped>
.promo {
  display: flex;
  padding: 42px 0 96px;
}
.promo__container {
  display: flex;
}
.promo__title {
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  max-width: 25%;
  margin-right: 4px;
}
.promo__subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  max-width: 650px;
  margin-bottom: 20px;
}

</style>
