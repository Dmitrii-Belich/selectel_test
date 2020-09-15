<template>
  <!-- eslint-disable vue/no-v-html -->
  <li class="faq-question">
    <button
      class="faq-question__button"
      @click="isQuestionOpened=!isQuestionOpened"
    >
      <closed-svg v-if="isQuestionOpened" />
      <opened-svg v-else />
    </button>
    <h3
      class="faq-question__title"
      v-html="question"
    />
    <div
      v-show="isQuestionOpened"
      class="faq-question__answer"
      v-html="answer"
    />
  </li>
</template>

<script>
import OpenedSvg from "@/static/images/faq-opened.svg";
import ClosedSvg from "@/static/images/faq-closed.svg";
export default {
  components: {
    "opened-svg": OpenedSvg,
    "closed-svg": ClosedSvg,
  },
  props: {
    question: {
      type:String,
      default: '',
      },
    answer: {
      type:String,
      default: '',
      },
  },
  data() {
    return {
      isQuestionOpened: false,
    };
  },
};
</script>

<style scoped>
.faq-question {
  border-top: 1px solid #d9d9d6;
  padding: 24px 0;
  position: relative;
}

.faq-question__button {
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  right: 0;
  top: 24px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease .3s;
}

.faq-question__button:hover {
  transform: rotate(180deg);
}

.faq-question__title {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
}

.faq-question__answer {
  margin-left: 34%;
  margin-right: 11%;
}

.faq-question__answer /deep/ p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
}

.faq-question__answer /deep/ a {
  color: #092433;
  cursor: pointer;
}
</style>
