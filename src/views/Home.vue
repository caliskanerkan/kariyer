<template>
  <Layout>
    <Search />
    <div>
      <div class="title">Genel İlanlar</div>
      <Jobs />
    </div>
  </Layout>
</template>

<script>
import Jobs from "@/components/Job/Jobs.vue";
import Search from "@/components/Search.vue";
import Layout from "@/components/Layout.vue";
export default {
  name: "Home",
  components: {
    Layout,
    Jobs,
    Search
  },
  methods: {
    async getJobs() {
      await this.$store.dispatch("getJobs");
    }
  },
  async created() {
    this.$store.commit("RESET_QUERY_PARAMS");
    await this.getJobs();
  }
};
</script>
