<template>
  <!-- eslint-disable vue/no-v-html -->
  <li class="advantage">
    <h3
      class="advantage__title"
      v-html="title"
    />
    <div class="advantage__wrapper">
      <img
        class="advantage__image"
        :src="image"
        alt
      >
      <div
        class="advantage__content"
        v-html="content"
      />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.advantage {
  border-top: solid 1px #D9D9D6;
  padding: 23px 0 32px;
}

.advantage__title {
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 32px;
  margin-bottom: 24px;
}
.advantage__content /deep/ li {
  list-style: '—';
  padding-left: 5px;
  font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
}

.advantage__content /deep/ a {
  color: inherit;

}

.advantage__image {
  width: 168px;
  align-self: flex-start;
  margin-right: 98px;
}
.advantage__wrapper {
  display: flex;
}
</style>
