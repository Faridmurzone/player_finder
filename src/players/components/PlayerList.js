import React, { Component } from 'react';

const API = "https://football-players-b31f2.firebaseio.com/players.json?print=pretty";  

class PlayerList extends Component {
    state = {
        players: []
      }
    // This functions may be placed in other side later  
    // Function to get the API URL
    requestURL = () => {
        fetch(API)
        .then(results => results.json())
        .then(data => this.setState({players: data}))
        .catch(err => ({err}))
      }
    // Function to convert the birthDate to age
    dateToAge = (date) => {
        var dateParts = date.split('-');
        var date = new Date(dateParts[0], dateParts[1], dateParts[2]);
        var ageDifMs = Date.now() - date.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

      componentDidMount() {
        this.requestURL()
      }
    

    render() {
        const { players } = this.state
        
        return(
            <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Player</th>
                    <th scope="col">Position</th>
                    <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    { players.map(player => 
                    <tr key={player.name}>
                    <th scope="row">{player.name}</th>
                    <td>{player.position}</td>
                    <td>{this.dateToAge(player.dateOfBirth)}</td>
                    </tr>)
                    }
                </tbody>
            </table>
            </div>
        )
    }
}

export default PlayerList;