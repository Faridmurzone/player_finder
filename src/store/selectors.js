// import { createSelector } from 'reselect';
// import {dateToAge} from '../players/utils';

// const getName = (state) => state.searchPlayers.name
// const getPosition = (state) => state.searchPlayers.position
// const getAge = (state) => state.searchPlayers.age

// export const searchedPlayers = createSelector(
//     [props => props.players, getName, getPosition, getAge],
//     (players, name, position, age) => players
//     .filter((player) => {
//       return player.name.toLowerCase().includes(name.toLowerCase())
//     }
//     )
//     .filter((player) => { 
//       return player.position.includes(position)
//     })
//     .filter((player) => 
//       age ? String(dateToAge(player.dateOfBirth)).includes(String(age)) : true
//     )
//   )