import { createSlice, nanoid } from "@reduxjs/toolkit";

export const memorySlice = createSlice({
  name: "memory",
  initialState: {
    items: [
      {
        id: nanoid(),
        title: "React",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Redux",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/redux.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Angular2",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Firebase",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/firebase.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Node.js",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Typescript",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/typescript.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Vue",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Grunt",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Phantomjs",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Ember",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Babel",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Ionic",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Gulp",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Meteor",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Yarn",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "React",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Redux",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/redux.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Angular2",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Firebase",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/firebase.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Node.js",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Typescript",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/typescript.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Vue",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Grunt",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Phantomjs",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Ember",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Babel",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Ionic",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Gulp",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Meteor",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
        isFlipped: false,
        canFlip: true,
      },
      {
        id: nanoid(),
        title: "Yarn",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
        isFlipped: false,
        canFlip: true,
      },
    ],
    openedItems: [],
    score: 50,
  },
  reducers: {
    flipCard: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.isFlipped = !item.isFlipped;
    },
    setMemories: (state, action) => {
      state.items = action.payload;
    },
    addOpenedItems: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      state.openedItems.push(item);
    },
    clearOpenedItems: (state) => {
      state.openedItems = [];
    },
    flipAllCard: (state) => {
      state.items.forEach((item) => {
        item.isFlipped = false;
      });
    },
    flipAllCardBack: (state) => {
      state.items.forEach((item) => {
        item.isFlipped = !item.isFlipped;
      });
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    addScore: (state, action) => {
      state.score += action.payload;
    },
    subtractScore: (state, action) => {
      if (state.score !== 0) {
        state.score -= action.payload;
      }
    },
    setCanFlip: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.canFlip = false;
    },
    setCanFlipAll: (state) => {
      state.items.forEach((item) => {
        item.canFlip = true;
      });
    },
  },
});

export const getFlipped = (state) =>
  state.memory.items.filter((item) => item.isFlipped);
export const getFlippedCount = (state) => getFlipped(state).length;
export const {
  flipCard,
  setMemories,
  addOpenedItems,
  clearOpenedItems,
  flipAllCard,
  setScore,
  addScore,
  subtractScore,
  flipAllCardBack,
  setCanFlip,
  setCanFlipAll,
} = memorySlice.actions;
export default memorySlice.reducer;
