// import { createSelector } from 'reselect';

export function playersHasErrored(state = false, action) {
  switch (action.type) {
      case 'PLAYERS_HAS_ERRORED':
          return action.hasErrored;
      default:
          return state;
  }
}
export function playersIsLoading(state = false, action) {
  switch (action.type) {
      case 'PLAYERS_IS_LOADING':
          return action.isLoading;
      default:
          return state;
  }
}
export function players(state = [], action) {
  switch (action.type) {
      case 'PLAYERS_FETCH_DATA_SUCCESS':
          return action.players;
      default:
          return state;
  }
}

const initialState = {
  name: "",
  position: "",
  age: "",
};

export function searchPlayers(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_PLAYER":
      // const list = state.players;
      // console.log(list)
      // const results = state.players.filter((player)=>{
      //   return player.name.includes(action.payload.name)
      // })
      //  console.log(results)
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.position,
        position: action.payload.age,
      }
    default:
      return state;
  }
}
