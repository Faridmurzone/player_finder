import React, { Component } from 'react';

class PlayerList extends Component {
    state = {
        players: []
      }
    
    getPlayers = () => {
        fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
        .then(response => response.json())
        .then(data => ({data}))
        .catch(err => ({err}))
      }

      componentDidMount() {
        this.getPlayers()
      }
    
    renderPlayers = ({ name, position, dateOfBirth }) => 
                                                    <tr key={name}>
                                                        <td>{name}</td>
                                                        <td>{position}</td>
                                                        <td>{dateOfBirth}</td>
                                                    </tr>

    render() {
        const { players } = this.state
        
        return(
            <div>
                { console.log() }
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Player</th>
                    <th scope="col">Position</th>
                    <th scope="col">Team</th>
                    <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                     { players.map(this.renderPlayers) }
                    <tr>
                    <th scope="row">Players...</th>
                    <td>Positions...</td>
                    <td>Teams...</td>
                    <td>Ages...</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

export default PlayerList;