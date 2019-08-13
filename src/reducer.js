const initialState = [
  {
    id: "EmberRainDance",
    url: "https://marsh-hawk-mp3s.s3.amazonaws.com/EmberRainDanceMaster3.mp3",
    title: "Ember Rain Dance",
    description: "The sounds of rain dancing on flame",
    isPlaying: false,
    track: undefined,
    scoreId: 'd1eebff86a4a21a74a35acf9ef619c347cf5c4c8'
  },
  {
    id: "EyesOfTheMoon",
    url: "https://marsh-hawk-mp3s.s3.amazonaws.com/EyesOfTheMoon.mp3",
    title: "Eyes Of The Moon",
    description: "Inspired by the poem by Pablo Neruda",
    isPlaying: false,
    track: undefined,
    scoreId: '4e7a449af6b52ee322783e5882f20f8ef55e79a0'
  },
  {
    id: "FyreBeet",
    url: "https://marsh-hawk-mp3s.s3.amazonaws.com/FyreBeet.mp3",
    title: "Fyre Beet",
    description: `Golden beets like burnin' fyre`,
    isPlaying: false,
    track: undefined
  },
  {
    id: "Distance",
    url: "https://marsh-hawk-mp3s.s3.amazonaws.com/Distance.mp3",
    title: "Distance",
    description: "Andromeda Suite: Part IV",
    isPlaying: false,
    track: undefined
  },
  {
    id: "Prelude",
    url: "https://marsh-hawk-mp3s.s3.amazonaws.com/Prelude.mp3",
    title: "Prelude",
    description:
      "Prelude to the melanistic chipmunk that visits me occasionally",
    isPlaying: false,
    track: undefined,
  },
  {
    id: "RainbowSomething",
    url: "https://marsh-hawk-mp3s.s3.amazonaws.com/t1m2.mp3",
    title: "Rainbow Something",
    description: "The title of a haiku",
    isPlaying: false,
    track: undefined
  }
];

export function tracks(state = initialState, action) {
  switch (action.type) {
    case "PLAY":
      return state.map(t => {
        return t.id === action.payload.id
          ? { ...t, isPlaying: true, track: action.payload.track }
          : t;
      });
    case "PAUSE":
      return state.map(t => {
        return t.id === action.payload.id ? { ...t, isPlaying: false } : t;
      });
    default:
      return state;
  }
}

const WindowAudioContext = window.AudioContext || window.webkitAudioContext;

const audioCtx = {
  context: (WindowAudioContext) ? new WindowAudioContext() : undefined,
  isSupported: (WindowAudioContext) ? true : false
};

export function audioContext(state = audioCtx, action) {
  switch (action.type) {
    default:
      return state;
  }
}
