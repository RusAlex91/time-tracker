<template>
  <div class="tracker-wrapper">
    <div class="tracker">
      <div class="tracker-body">
        <h3 class="tracker-body__title" :class="{ complete: complete }">
          {{ title }}
        </h3>
        <p class="tracker-body__desc" :class="{ complete: complete }">
          {{ description }}
        </p>
      </div>
      <button class="tracker__done" @click="doneTracker(id)">Done</button>
      <div class="tracker__time">
        <span ref="time" class="tracker-time__timer">00:00:00</span>
        <div class="tracker-controls">
          <button
            @click="startTimer"
            v-show="!timerRunning"
            class="tracker-controls__play"
          >
            Start
          </button>
          <button @click="pauseTimer" class="tracker-controls__pause">
            Pause
          </button>
          <button @click="stopTimer" class="tracker-controls__stop">
            Stop
          </button>
        </div>
      </div>
      <button class="tracker-controls__delete" @click="deleteTracker(id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    id: {
      type: Date,
      required: true
    },
    complete: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      timer: null,
      timerBody: {
        second: 0,
        minute: 0,
        hour: 0
      },
      timerTick: 0,
      timerRunning: false
    }
  },
  methods: {
    startTimer () {
      if (this.timerRunning === false) {
        this.timerRunning = true
        this.timer = setInterval(() => {
          this.timerTick = this.timerBody.second
          this.timerTick++
          console.log('tick')
          let tempSec = this.timerTick
          let tempMin = this.timerBody.minute
          let tempHour = this.timerBody.hour

          this.timerBody.second = this.timerTick

          if (this.timerTick < 10) {
            tempSec = '0' + this.timerTick
          }

          if (this.timerTick > 59) {
            this.timerBody.second = 0
            tempSec = 0

            this.timerBody.minute++
            tempMin++
          }

          if (tempMin < 10) {
            tempMin = '0' + this.timerBody.minute
          }

          if (tempMin > 59) {
            this.timerBody.minute = 0
            tempMin = 0

            this.timerBody.hour++
            tempHour++
          }

          if (tempHour < 10) {
            tempHour = '0' + this.timerBody.hour
          }
          console.log(this.timer)
          // eslint-disable-next-line quotes
          this.$refs.time.innerText = `${tempHour}:${tempMin}:${tempSec}`
        }, 1000)
      }
    },
    pauseTimer () {
      clearInterval(this.timer)
      this.timerRunning = false
    },
    stopTimer () {
      this.timerBody.second = 0
      this.timerBody.minute = 0
      this.timerBody.hour = 0
      clearInterval(this.timer)
      this.timerRunning = false
      this.$refs.time.innerText = '00:00:00'
    },
    deleteTracker (tracker) {
      this.$store.commit('deleteTracker', tracker)
    },
    doneTracker (tracker) {
      this.$store.commit('doneTracker', tracker)
      this.$store.commit('filterTracker', tracker)

      this.stopTimer()
    }
  }
}
</script>

<style scoped lang="scss">
.tracker-wrapper {
}
.tracker {
  /* .tracker__title */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  /* .tracker__time */

  &__time {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__done {
    height: 30px;
    background: lightgreen;
  }
}

.tracker-body {
  display: flex;
  column-gap: 15px;
  justify-content: center;
  align-items: center;
  &__title {
  }

  /* .tracker__desc */

  &__desc {
  }
}

.tracker-time {
  display: flex;
  /* .tracker-time__timer */
  align-items: center;
  &__timer {
  }
}
.tracker-controls {
  /* .tracker-controls__play */
  &__play {
    font-size: 12px;
  }

  /* .tracker-controls__pause */

  &__pause {
    font-size: 12px;
  }

  /* .tracker-controls__stop */

  &__stop {
    font-size: 12px;
  }

  /* .tracker-controls__delete */

  &__delete {
    height: 30px;
    background: tomato;
  }
}
.complete {
  text-decoration: line-through;
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
