<template>
  <div class="wrap">
    <tracker-form></tracker-form>
    <div class="trackers-wrapper">
      <tracker
        v-for="tracker in trackers"
        :title="tracker.title"
        :description="tracker.description"
        :id="tracker.id"
        :complete="tracker.complete"
        :key="tracker.id"
      ></tracker>
    </div>
  </div>
</template>

<script>
import Tracker from './Tracker.vue'
import TrackerForm from './TrackerForm.vue'
export default {
  components: {
    Tracker,
    TrackerForm
  },
  data () {
    return {
      trackers: this.$store.state.trackers
    }
  }
}
</script>

<style scoped>
.wrap {
  border: 1px solid teal;
  width: 800px;
  min-height: 500px;
  box-shadow: 1px 6px 8px 4px rgba(34, 60, 80, 0.2);
  background: #41b883a2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.trackers-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  row-gap: 25px;
}
</style>
