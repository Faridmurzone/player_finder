import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {      
    // Function to convert the birthDate to age
    dateToAge = (birthDate) => {
        console.log(birthDate.split('-'))
        var dateParts = birthDate.split('-');
        var date = new Date(dateParts[0], dateParts[1], dateParts[2]);
        var ageDifMs = Date.now() - date.getTime();
        var ageDate = new Date(ageDifMs); 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    printPlayers = () => {
      const players = this.props.players
      let tbody = []
      for (const i in players) {
        tbody.push(
          <tr key={players[i].name}>
          <td>{players[i].name}</td>    
          <td>{players[i].position}</td>   
          <td>{players[i].nationality}</td>   
          {/* <td>{this.dateToAge(players[i].dateOfBirth)}</td>  */}
          <td>{players[i].dateOfBirth}</td> 
          </tr>)
      }
      return tbody
    }

    render() {
        return(
            <div className="col-md-8">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Player</th>
                    <th scope="col">Position</th>
                    <th scope="col">nationality</th>
                    <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    this.printPlayers()
                  }
                </tbody>
            </table>
            </div>
        )
    }
}


// To do connect
function mapStateToProps(state, props) {
    return {
        players: state.data,
        search: state.search
    }
}

export default connect(mapStateToProps)(PlayerList);


// const getFilteredPlayers = createSelector(
//     [getPlayers],
//     (players) => {
//       return _.sortByOrder(articles, ['created'], ['desc']);
//     }
//   ) 
// export default connect(
//     (state) => ({
//         players: getFilteredPlayers(state)
//     })
// )(PlayerList);
