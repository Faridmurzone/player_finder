// !!!!
// To do dispatch of actions...
// !!!

export function playersHasErrored(bool) {
  return {
      type: 'PLAYERS_HAS_ERRORED',
      hasErrored: bool
  }
}
export function playersIsLoading(bool) {
  return {
      type: 'PLAYERS_IS_LOADING',
      isLoading: bool
  }
}
export function playersFetchDataSuccess(players) {
  return {
      type: 'PLAYERS_FETCH_DATA_SUCCESS',
      players
  }
}

// Async fetch passing dispatch to 'thunked' function
export function fetchPlayersData(url) {
  return (dispatch) => {
      dispatch(playersIsLoading(true));
      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              dispatch(playersIsLoading(false));
              return response;
          })
          .then((response) => response.json())
          .then((players) => dispatch(playersFetchDataSuccess(players)))
          .catch(() => dispatch(playersHasErrored(true)));
  }
}

// Control Filter states
export const updateName = name => ({
    type: "filters/UPDATE_NAME",
    payload: name,
  })
  
export const updatePosition = position => ({
    type: "filters/UPDATE_POSITION",
    payload: position,
  })
  
export const updateAge = age => ({
    type: "filters/UPDATE_AGE",
    payload: age,
  })

// Control players states
export const fetchPlayers = players => ({
    type: "players/GET_PLAYERS",
    payload: players,
  })
  
