<template>
  <div class="tracker-wrapper">
    <img alt="Vue logo" src="./assets/logo.png" width="250" />
    <h1>Time Tracker</h1>
    <tracker-view msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import TrackerView from './components/TrackerView.vue'

export default {
  components: {
    TrackerView
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Roboto', sans-serif;
}

.tracker-wrapper {
  display: flex;
  flex-direction: column;

  align-items: center;
}

h1 {
  margin: 25px;
}
</style>
