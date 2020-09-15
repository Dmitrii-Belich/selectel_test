<template>
    <button :class="['button', `button_type_${type}`]" @click="$emit('click')"/>
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
  width: 20px;
  height: 40px;
  transition: all ease .2s;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  background-image: url('/images/switchbutton.svg');
  opacity: .5;
}

.button_type_right {
  transform: rotate(180deg);
}

.button:hover {
opacity: 1;
}
</style>
