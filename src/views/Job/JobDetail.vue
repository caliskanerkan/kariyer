<template>
  <Detail :job="job" />
</template>
<script>
import axios from "@/axios";
import Detail from "@/components/Job/Detail.vue";
export default {
  components: {
    Detail
  },
  methods: {
    async getJob(id) {
      try {
        const { data } = await axios.get(`joblist/${id}`);
        this.job = data;
      } catch (error) {
        alert("Hata");
        this.$router.back();
      }
    }
  },
  computed: {
    job: {
      get() {
        return this.$store.state.job;
      },
      set(val) {
        this.$store.commit("SET_JOB", val);
      }
    }
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler(id) {
        this.getJob(id);
      }
    }
  }
};
</script>
