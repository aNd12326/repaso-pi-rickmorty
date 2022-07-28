import axios from "axios";
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_EPISODES = "FETCH_EPISODES";
export const LOADING = "LOADING";
export const CLEAR_PAGE = "CLEAR_PAGE";

export function setLoading(payload) {
  return {
    type: LOADING,
    payload,
  };
}

export function fetchCharacters() {
  return function (dispatch) {
    dispatch(setLoading(true));
    axios.get("http://localhost:3001/api/characters").then((character) => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: character.data,
      });
      dispatch(setLoading(false));
    });
  };
}

export function fetchEpisodes() {
  return function (dispatch) {
    axios.get("http://localhost:3001/api/episodes").then((episode) => {
      dispatch({
        type: FETCH_EPISODES,
        payload: episode.data,
      });
    });
  };
}

export function clearPage() {
  return {
    type: CLEAR_PAGE,
  };
}
