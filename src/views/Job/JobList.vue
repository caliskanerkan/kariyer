<template>
  <Layout>
    <Search />
    <Jobs />
  </Layout>
</template>
<script>
import Layout from "@/components/Layout.vue";
import Jobs from "@/components/Job/Jobs.vue";
import Search from "@/components/Search.vue";
import { mapState } from "vuex";
export default {
  components: {
    Jobs,
    Layout,
    Search
  },
  computed: {
    ...mapState(["jobs", "queryParams"])
  },
  methods: {
    queryHandler(queryParams) {
      const { q = null, cityName = [] } = queryParams;
      const query = {
        q,
        cityName: typeof cityName === "string" ? [cityName] : cityName
      };
      this.$store.commit("SET_QUERY_PARAMS", query);
      this.$store.dispatch("getJobs");
    }
  },
  watch: {
    "$route.query": {
      deep: true,
      immediate: true,
      handler(n) {
        this.queryHandler(n);
      }
    }
  }
};
</script>
