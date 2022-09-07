//storing information about currently selected
//state
const state = {
  GAME_SELECTED:{
    name: '',
    imgPath: '',
    rootDir: ' '
  },

  TAB_SELECTED:'Replay',
  
  GAME_TITLE: '',

  FILE_SELECTED:{
    //.Map.Gbx
    MAP:{
      Thumbnail:{
        value: String,
        size: Number
      },
      Author:{
        login: String,
        nickname: String,
        zone: String,
        score: Number,

        info_id: Number,
        info_envi: String,
        info_author: String
      },
      Time:{
        author: Number,
        gold: Number,
        silver: Number,
        bronze: Number
      },
      Map:{
        name: String,
        comments: String,
        copper: Number,
        editor: Number,
        checkpoints: Number,
        laps: Number,
        multilap: Boolean,
        tracktype: Number,
        lightmap: Number,
        locked: Boolean,
      }
    },

    //.Replay.Gbx
    REPLAY:{
      Author:{
        login: String,
        nickname: String,
        zone: String,
        score: Number,

        info_id: Number,
        info_envi: String,
        info_author: String
      },
      Driver:{
        login: String,
        nickname: String,
        time: Number
      },

    }
  }
}

export default {
  state
}