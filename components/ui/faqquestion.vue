<template>
  <div class="faq-question">
    <button class="faq-question__button"></button>
    <h3 class="faq-question__title">{{question}}</h3>
    <div class="faq-question__answer" v-html="answer">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      question: String,
      answer: String,
      opened: Boolean,
    }
  }
</script>

<style scoped>

</style>
