import React, { Component } from 'react';
import dateToAge from '../utils';

class PlayerList extends Component {
    render() {
        const {hasErrored, isLoading} = this.props
        if (hasErrored) {
            return <p>Sorry! There was an error loading the players</p>;
        }
        if (isLoading) {
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
                    {this.props.players.map(({ name, position, nationality, dateOfBirth }) => (
                    <tr key={name}>
                    <td>{name}</td>    
                    <td>{position}</td>   
                    <td>{nationality}</td>   
                    <td>{dateToAge(dateOfBirth)}</td> 
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
    }
}

export default PlayerList;


