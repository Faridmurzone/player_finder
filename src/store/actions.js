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