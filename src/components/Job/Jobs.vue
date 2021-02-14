<template>
  <div>
    <div :class="containerClass" v-if="jobs.length > 0">
      <div :class="jobClass" v-for="job in jobs" :key="job.id">
        <Job :job="job" />
      </div>
    </div>
    <div v-else>
      <div>Sonuç bulunamadı.</div>
    </div>
  </div>
</template>
<script>
import Job from "./Job.vue";
import { mapState } from "vuex";
export default {
  name: "Jobs",
  components: {
    Job
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "row",
      validator: function(val) {
        return ["row", "column"].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    ...mapState(["jobs"]),
    containerClass: function() {
      return {
        jobs: true,
        [`jobs--${this.type}`]: true
      };
    },
    jobClass: function() {
      return {
        "box-shadow": true,
        "jobs--row--4": this.type === "row"
      };
    }
  }
};
</script>
