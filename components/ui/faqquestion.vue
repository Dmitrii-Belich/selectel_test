<template>
  <!-- eslint-disable vue/no-v-html -->
  <li
    class="faq-question"
    @click="isQuestionOpened=!isQuestionOpened"
  >
    <button class="faq-question__button">
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
      @click.stop
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
      type: String,
      default: "",
    },
    answer: {
      type: String,
      default: "",
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
  transition: all ease 0.3s;
}

.faq-question:hover .faq-question__button {
  transform: rotate(180deg);
}

.faq-question:hover {
  color: #eb4247;
  cursor: pointer;
}

.faq-question__title {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
  margin-right: 30px;
}

.faq-question__answer {
  margin-left: 34%;
  margin-right: 11%;
  color: #092433;
  cursor: text;
}

.faq-question__answer /deep/ p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
}

.faq-question__answer /deep/ a {
  color: #eb4247;
  text-decoration: none;
  transition: all ease 0.2s;
}

.faq-question__answer /deep/ a:hover {
  opacity: 0.5;
}

@media screen and (max-width: 768px) {
  .faq-question__answer {
    margin-left: 60px;
    margin-right: 0;
  }
}

@media screen and (max-width: 660px) {
  .faq-question__answer {
    margin-left: 20px;
    margin-right: 0;
  }
}

@media screen and (max-width: 500px) {
  .faq-question__title {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 10px;
    margin-right: 30px;
  }

  .faq-question__answer /deep/ p {
    font-size: 14px;
    line-height: 18px;
  }
}
</style>
