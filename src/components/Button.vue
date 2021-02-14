<template>
  <button :class="btnClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
<script>
export default {
  computed: {
    btnClass() {
      return {
        btn: true
      };
    }
  }
};
</script>
