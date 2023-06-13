import { createSlice, configureStore } from "@reduxjs/toolkit";

export const initialState = {
  category: null,
  difficulty: null,
  score: 0,
  pageIndex: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload.category;
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload.difficulty;
    },
    incrementScore(state) {
      state.score += 1;
    },
    resetScore(state) {
      state.score = 0;
    },
    incrementPageIndex(state) {
      state.pageIndex += 1;
    },
    resetPageIndex(state) {
      state.pageIndex = 1;
    },
  },
});

const store = configureStore({
  reducer: quizSlice.reducer,
});

export const quizActions = quizSlice.actions;

export default store;
