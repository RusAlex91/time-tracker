<template>
  <div class="tracker-form">
    <div class="tracker-form__body">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="title" />
      <label for="decription">Decription:</label>
      <input type="text" id="description" v-model="description" />
    </div>
    <div class="tracker-form__controls">
      <button @click="addTracker">Add Tracker</button>
      <button @click="clearTracker">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: null,
      description: null
    }
  },
  methods: {
    addTracker () {
      this.$store.commit('trackerInfo', {
        id: new Date(),
        title: this.title,
        description: this.description,
        complete: false
      })
      this.clearTracker()
      this.$store.commit('filterTracker')
    },
    clearTracker () {
      this.title = null
      this.description = null
    }
  }
}
</script>

<style scoped>
.tracker-form {
  display: flex;
  margin-top: 25px;
  column-gap: 15px;
  justify-content: center;
  align-items: center;
}

.tracker-form__body input {
  height: 20px;
  font-family: 'Roboto', sans-serif;
}

.tracker-form__body label {
  margin: 15px;
}

.tracker-form__controls button:last-child {
  margin-left: 5px;
}

button {
  border-radius: 10px;
  background: wheat;
  padding: 5px;
  cursor: pointer;
}

button:hover {
  background: rgb(243, 207, 139);
}
</style>
