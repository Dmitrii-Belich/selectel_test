<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
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
  transition: all ease 0.2s;
  cursor: pointer;
}
.button:hover {
  background: #eb4247;
  border: 1px solid #eb4247;
  color: #fff;
}
@media screen and (max-width: 768px) {
  .button {
    width: 100%;
  }
}
</style>
