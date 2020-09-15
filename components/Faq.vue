<template>
  <section class="faq">
    <container
      type="small"
      class="faq__container"
    >
      <h2 class="faq__title">
        {{ faqData.title }}
      </h2>
      <ul>
        <faqquestion
          v-for="item in faqData.items"
          :key="item.id"
          :answer="item.answer"
          :question="item.question"
        />
      </ul>
    </container>
  </section>
</template>

<script>
import container from "@/components/ui/container";
import faqquestion from "@/components/ui/faqquestion";
export default {
  components: {
    container,
    faqquestion,
  },
  computed: {
    faqData() {
      return this.$store.getters["blocks/getFaq"];
    },
  },
};
</script>

<style scoped>
.faq {
  display: flex;
  padding: 96px 0;
  color: #092433;
}
.faq__title {
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 32px;
}
</style>
