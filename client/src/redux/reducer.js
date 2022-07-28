import {
  CLEAR_PAGE,
  FETCH_CHARACTERS,
  FETCH_EPISODES,
  LOADING,
} from "./actions";

const initialState = {
  characters: [],
  loading: false,
  episodes: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    case FETCH_EPISODES:
      return {
        ...state,
        episodes: payload,
      };
    case CLEAR_PAGE:
      return {
        ...state,
        characters: [],
      };
    case LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
}
