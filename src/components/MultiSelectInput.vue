<template>
  <div v-click-outside="close" class="multibox">
    <div @click="open">
      <div v-if="selected.length === 0">Şehirler</div>
      <div v-else class="multibox--owned">
        <div v-for="(location, index) in selected" :key="index">
          {{ locationSeperator(index) }}
        </div>
      </div>
    </div>
    <div v-if="show" class="inner-multibox box-shadow">
      <div class="inner-multibox--search">
        <input type="text" v-model="q" placeholder="Şehir arayın" />
      </div>
      <div v-if="filteredLocations.length > 0">
        <div
          class="inner-multibox--list"
          v-for="location in filteredLocations"
          :key="location.value"
        >
          <checkbox v-model="selected" :value="location.value" />
        </div>
      </div>
      <div v-else>
        Sonuç bulununamadı.
      </div>
    </div>
  </div>
</template>
<script>
import clickOutside from "@/directives/clickoutside.js";
import Checkbox from "./Checkbox.vue";
import { mapState } from "vuex";
export default {
  directives: {
    clickOutside
  },
  components: {
    Checkbox
  },
  data() {
    return {
      selected: this.$store.state.queryParams.cityName,
      show: false,
      q: ""
    };
  },
  props: {
    items: {
      required: false,
      type: Array
    }
  },
  methods: {
    locationSeperator(index) {
      return index !== this.selected.length - 1
        ? `${this.selected[index]},`
        : this.selected[index];
    },
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    }
  },
  computed: {
    ...mapState(["queryParams"]),
    filteredLocations() {
      return this.items.filter(location => {
        return location.value
          .toLocaleLowerCase()
          .includes(this.q.toLocaleLowerCase());
      });
    }
  },
  watch: {
    selected: {
      deep: true,
      immediate: true,
      handler(n) {
        this.$emit("on-change-selecteds", n);
      }
    },
    "$route.query": {
      deep: true,
      immediate: true,
      handler(n) {
        const { cityName } = n;
        typeof cityName === "string"
          ? (this.selected = [cityName])
          : (this.selected = cityName || []);
      }
    }
  }
};
</script>
