// !!!!
// To do dispatch of actions...
// !!!

// Control Filter states
export const updateName = name => ({
    type: "filters/UPDATE_NAME",
    payload: name,
  });
  
  export const updatePosition = position => ({
    type: "filters/UPDATE_POSITION",
    payload: position,
  });
  
  export const updateAge = age => ({
    type: "filters/UPDATE_AGE",
    payload: age,
  });

// Control players states
export const fetchPlayers = players => ({
    type: "players/GET_PLAYERS",
    payload: players,
  });
  
