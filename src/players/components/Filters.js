import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filters extends Component {
    handleSubmit = event => {
        event.preventDefault()
        const {name, age, position} = event.target;
        this.props.dispatch({
            type: 'SEARCH_PLAYER',
            payload: {
                name: name.value,
                position: position.value, 
                age: age.value  }
        })
    }

    render() {
        return(
            <div className="d-flex justify-content-around m-2">
                <form className="form-inline" id="filters" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <input type="text" 
                        name="name"
                        className="form-control mr-sm-2" 
                        id="formInputName" 
                        placeholder="Player Name"
                        pattern="[a-zA-z\s]*"
                        />
                    <select className="custom-select" id="formSelectPosition" name="position">
                        <option value="">Position...</option>
                        <option value="Attacking Midfield">Attacking Midfield</option>
                        <option value="Central Midfield">Central Midfield</option>
                        <option value="Centre-Forward">Centre-Forward</option>
                        <option value="Defensive Midfield">Defensive Midfield</option>
                        <option value="Keeper">Keeper</option>
                        <option value="Left Midfiel">Left Midfield</option>
                        <option value="Left Wing">Left Wing</option>
                        <option value="Left Back">Left Back</option>
                        <option value="Right-Back">Right-Back</option>
                    </select>   
                    <input type="number" 
                        name="age"
                        className="form-control ml-2" 
                        id="formInputAge" 
                        placeholder="Age" 
                        min="18"
                        max="40"
                        />
                    <button type="submit" className="btn btn-light ml-2" form="filters" value="Submit" id="search">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(Filters);