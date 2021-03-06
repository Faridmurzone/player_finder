import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filters extends Component {
    constructor () {
        super();
        this.state = {
          name: '',
          position: '',
          age: ''
        };
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch({
          type: "SEARCH_PLAYER",
          payload: {
            name: this.state.name,
            position: this.state.position,
            age: this.state.age,
          }
        })
      }
    
    // handleSubmit = event => {
    //     const {name, age, position} = event.target;
    //     this.props.dispatch({
    //         type: 'SEARCH_PLAYER',
    //         payload: {
    //             name: name.value,
    //             position: position.value, 
    //             age: age.value  }
    //     })
    //     event.preventDefault()
    // }
    
    render() {
        return(
            <div className="d-flex justify-content-around m-2" data-test="filters">
                <form className="form-inline col-md-12" id="filters" onSubmit={this.handleSubmit} data-test="submit">
                    <div className="form-group col-md-12 text-center">
                    <input type="text" 
                        name="name"
                        className="form-control mr-sm-2 col-xs-12 col-md-3" 
                        id="formInputName" 
                        placeholder="Player Name"
                        pattern="[a-zA-z\s]*"
                        onChange={this.handleChange}
                        value={this.state.name}
                        />
                    <select className="custom-select col-xs-12 col-md-3 mr-2" id="formSelectPosition" name="position"  value={this.state.position} onChange={this.handleChange}>
                        <option value="">Position...</option>
                        <option value="Attacking Midfield">Attacking Midfield</option>
                        <option value="Central Midfield">Central Midfield</option>
                        <option value="Centre-Forward">Centre-Forward</option>
                        <option value="Defensive Midfield">Defensive Midfield</option>
                        <option value="Keeper">Keeper</option>
                        <option value="Left Midfiel">Left Midfield</option>
                        <option value="Left Wing">Left Wing</option>
                        <option value="Left-Back">Left Back</option>
                        <option value="Right-Back">Right-Back</option>
                    </select>   
                    <input type="number" 
                        name="age"
                        className="form-control col-xs-12 col-md-3" 
                        id="formInputAge" 
                        placeholder="Age" 
                        min="18"
                        max="40"
                        onChange={this.handleChange}
                        value={this.state.age}
                        />
                    <button type="submit" className="btn btn-light ml-2" form="filters" value="Submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(Filters);