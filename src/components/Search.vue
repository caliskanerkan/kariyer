<template>
  <div class="search">
    <div class="search--wrap">
      <div class="search--locations">
        <MultiSelectInput
          @on-change-selecteds="onChangeSelecteds"
          :items="locations"
        />
      </div>
      <div class="search--main-keywords">
        <input
          type="text"
          @keydown.enter="searchJob"
          v-model="q"
          placeholder="Anahtar kelime"
        />
      </div>
      <div class="search--actions">
        <Button @click="searchJob">İŞ BUL</Button>
      </div>
    </div>
  </div>
</template>
<script>
import MultiSelectInput from "./MultiSelectInput";
import Button from "./Button";
import { mapState } from "vuex";
export default {
  data() {
    return {
      q: this.$store.state.queryParams.q,
      selecteds: []
    };
  },
  components: {
    MultiSelectInput,
    Button
  },
  computed: {
    ...mapState(["queryParams", "locations"])
  },
  methods: {
    onChangeSelecteds(selecteds) {
      this.selecteds = selecteds;
    },
    searchJob() {
      const query = {};
      this.q ? (query.q = this.q) : "";
      this.selecteds.length > 0 ? (query.cityName = this.selecteds) : "";
      this.$store.commit("SET_QUERY_PARAMS", {
        q: this.q ? this.q : null,
        cityName: [...this.selecteds]
      });
      this.$router.push({ name: "Joblist", query });
    }
  },
  watch: {
    "$route.query": {
      deep: true,
      immediate: true,
      handler(n) {
        const { q = null } = n;
        this.q = q;
      }
    }
  }
};
</script>
