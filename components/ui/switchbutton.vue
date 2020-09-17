<template>
  <button
    :class="['button', `button_type_${type}`]"
  />
</template>

<script>
export default {
  props: {
    type: {
        type: String,
        enum: ['left', 'right'],
        default: 'left',
      }
  },
};
</script>

<style  scoped>
.button {
  position: static;
  width: 20px;
  height: 40px;
  transition: all ease .2s;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  background-image: url("data:image/svg+xml,%3Csvg width='21' height='40' viewBox='0 0 21 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.53347 21.2091L20.9567 37.6322L18.5889 40L3.4458 24.8499L0.969641 22.3596C-0.326843 21.0558 -0.322672 18.9484 0.978958 17.6497L3.43971 15.1944L18.5889 0L20.9567 2.36776L4.53347 18.8413C3.87856 19.4962 3.87856 20.5542 4.53347 21.2091Z' fill='white'/%3E%3C/svg%3E%0A");
  opacity: .5;
}

.button_type_right {
  transform: rotate(180deg);
}

.button::after{
content: '';
}

.button:hover {
opacity: 1;
}
</style>
