<template>
  <a
    class="button__link"
    href="link"
  >
    <button class="button">{{ text }}</button>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style  scoped>
.button {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  line-height: 22px;
  text-transform: uppercase;
  padding: 16px 32px;
  background: #fff;
  border: 1px solid #092433;
  border-radius: 6px;
  transition: all ease .2s;
  cursor: pointer;
}
.button:hover {
  background: #092433;
  color: #fff;
  border: 1px solid #fff;
}
@media screen and (max-width: 768px) {
.button {
  width: 100%;
}
}

</style>
