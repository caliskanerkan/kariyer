<template>
  <div class="layout">
    <Header />
    <slot></slot>
  </div>
</template>
<script>
import Header from "./Header.vue";
import { mapState } from "vuex";
export default {
  components: {
    Header
  },
  computed: { ...mapState(["jobs", "locations"]) },
  methods: {
    async getLocations() {
      if (this.locations.length === 0)
        await this.$store.dispatch("getLocations");
    }
  },
  async created() {
    await this.getLocations();
  }
};
</script>
