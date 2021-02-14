<template>
  <Layout>
    <div class="job-details">
      <div class="job-details--container">
        <div class="job-details--apply">
          <div>
            <span> {{ job.positionName }} </span>
            <span> {{ job.companyName }} </span>
            <span> {{ job.cityName }} </span>
          </div>
          <Button>Başvur</Button>
        </div>
        <div class="job-details--content">
          <img @error="setDummyImage" :src="job.imageContent" alt="Brand" />
          <div class="job-details--description">
            <h1>GENEL NİTELİKLER VE İŞ TANIMI</h1>
            <p>{{ job.description }}</p>
          </div>

          <div class="job-details--requirements">
            <h1 class="job-details--sub-title">
              Aday Kriterleri
            </h1>
            <div class="job--details__pd-30">
              <div class="job-details--requirements--column">
                <span>Tecrübe:</span>
                <div>{{ job.experince }}</div>
              </div>
              <div class="job-details--requirements--column">
                <span>Askerlik:</span>
                <div>{{ military[job.military] }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Button from "@/components/Button.vue";
import Layout from "@/components/Layout.vue";
export default {
  data() {
    return {
      military: {
        Complated: "Tamamlandı",
        Uncomplated: "Tamamlanmadı"
      }
    };
  },
  components: {
    Button,
    Layout
  },
  methods: {
    setDummyImage(e) {
      e.target.src =
        "https://img-kariyer.mncdn.com/employers/jobposting/ShablonPic/2931/1_612x30010.02.21.jpg";
    }
  },
  props: {
    job: {
      type: Object,
      required: true
    }
  }
};
</script>
