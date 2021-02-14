<template>
  <label :for="value">
    <input :id="value" type="checkbox" v-model="selected" :value="value" />
    {{ value }}
  </label>
</template>
<script>
export default {
  model: { prop: "options" },
  props: ["value", "options"],
  computed: {
    checked() {
      return this.options.includes(this.value);
    },
    selected: {
      get() {
        return this.options;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>
