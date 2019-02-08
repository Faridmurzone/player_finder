import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayersData } from '../../store/actions';

class PlayerList extends Component {      

    componentDidMount() {
        this.props.fetchData('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
    }

    // Function to convert the birthDate to age
    dateToAge = (birthDate) => {
        var dateParts = birthDate.split('-');
        var date = new Date(dateParts[0], dateParts[1], dateParts[2]);
        var ageDifMs = Date.now() - date.getTime();
        var ageDate = new Date(ageDifMs); 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }


    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the players</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading players…</p>;
        }

        return (
            <div className="col-md-12">
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
                    {this.props.players.map((player) => (
                    <tr key={player.name}>
                    <td>{player.name}</td>    
                    <td>{player.position}</td>   
                    <td>{player.nationality}</td>   
                    <td>{this.dateToAge(player.dateOfBirth)}</td> 
                    {/* <td>{players.dateOfBirth}</td>  */}
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
    }
}


// To do connect
// function mapStateToProps(state, props) {
//     return {
//         players: state.data,
//         search: state.search
//     }
// }

const mapStateToProps = (state) => {
    return {
        players: state.players,
        hasErrored: state.playersHasErrored,
        isLoading: state.playersIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchPlayersData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);


// export default connect(mapStateToProps)(PlayerList);


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
// )(PlayerList)
