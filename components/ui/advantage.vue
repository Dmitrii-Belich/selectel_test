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
  border-top: solid 1px #d9d9d6;
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
  list-style: "—";
  padding-left: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
}

.advantage__content /deep/ a {
  color: #eb4247;
  text-decoration: none;
  transition: all ease 0.2s;
}

.advantage__content /deep/ a:hover {
  opacity: 0.5;
}

.advantage__image {
  width: 168px;
  align-self: flex-start;
  margin-right: 98px;
}

.advantage__wrapper {
  display: flex;
}

@media screen and (max-width: 768px) {

  .advantage {
    padding: 15px 0 32px;
  }

  .advantage__title {
    margin-bottom: 16px;
  }

  .advantage__content {
    margin-left: 145px;
  }

  .advantage__image {
    width: 160px;
    margin: 0 0 16px;
  }

  .advantage__wrapper {
    flex-direction: column;
  }
}

@media screen and (max-width: 500px) {

  .advantage__title {
    font-size: 19px;
    line-height: 24px;
  }

  .advantage__content /deep/ li {
    font-size: 14px;
    line-height: 20px;
  }

  .advantage__content {
    margin-left: 50px;
  }

  .advantage__image {
    width: 160px;
    margin: 0 auto 10px;
  }
}
</style>
