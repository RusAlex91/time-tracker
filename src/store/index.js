import { createStore } from 'vuex'

export default createStore({
  state: {
    title: null,
    description: null,
    trackers: [
      {
        id: new Date(),
        title: 'testing title 1',
        description: 'testing description',
        complete: false
      }
    ]
  },
  mutations: {
    trackerInfo (state, payload) {
      state.trackers.push(payload)
    },
    deleteTracker (state, tracker) {
      const index = state.trackers.findIndex(c => c.id === tracker)
      state.trackers.splice(index, 1)
    },
    doneTracker (state, tracker) {
      state.trackers.find(function (o) {
        if (o.id === tracker) {
          o.complete = true
        }
      })
    },
    filterTracker (state) {
      state.trackers.sort(function (x, y) {
        return x.complete - y.complete
      })
    }
  },
  actions: {},
  modules: {}
})
