import Vue from 'vue'
import Vuex from 'vuex'

import CurrentState from './current/cState.js'
import replayList from './current/cReplayList.js'
import mapList from './current/cMapList.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    current: CurrentState,
    replays: replayList,
    maps: mapList
  }
})
