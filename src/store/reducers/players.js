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

export function searchPlayers(state = {name: "", position: "", age: ""}, action) {
  switch (action.type) {
    case "SEARCH_PLAYER":
      return {
        ...state,
        name: action.payload.name,
        position: action.payload.position,
        age: action.payload.age
      }
    default:
      return state;
  }
}
