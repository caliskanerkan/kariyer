<template>
  <router-link :to="{ name: 'Detail', params: { id: job.id } }">
    <div class="job">
      <div class="job--title">
        {{ job.positionName }}
      </div>
      <div class="job--company">
        {{ job.companyName }}
      </div>
      <div class="job--location">
        {{ fullLocationAddress }}
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "Job",
  props: {
    job: {
      type: Object,
      required: false
    }
  },
  computed: {
    fullLocationAddress() {
      const { cityName, townName = "" } = this.job;
      return `${cityName}/${townName}`;
    }
  }
};
</script>
