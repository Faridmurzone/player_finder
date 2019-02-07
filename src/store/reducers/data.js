function data(state, action) {
  switch (action.type) {
    case 'SEARCH_PLAYER': {
      const list = state.data;
      console.log(list)
      // https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
      const filtered = Object.keys(list)
                    .filter(key => console.log(key))
                    // key.includes(action.payload.query) 
                    .reduce((obj, key) => {
                      obj[key] = list[key];
                      return obj;

                    }, {});
      // const result = Object.keys(list).filter(key => console.log(key))
      // console.log(result)
      // const results = list.filter((x) => {
        // return x.name.includes(action.payload.query)
        // && results.push(item)
      // })
      return {
        ...state,
        search: filtered
      }
    }
    default: return state
  }
}

export default data;