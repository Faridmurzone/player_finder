const initialState = {
    name: "",
    position: "",
    age: "",
    list: [],
  };
  
  const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case "filters/UPDATE_NAME":
        return {
          ...state,
          name: payload,
        };
      case "filters/UPDATE_POSITION":
        return {
          ...state,
          position: payload,
        };
      case "filters/UPDATE_AGE":
        return {
          ...state,
          age: payload,
        };
      case "players/GET_PLAYERS":
        return {
          ...state,
          list: payload,
        };
      default:
        return state;
    }
  };

  export default reducer;
  