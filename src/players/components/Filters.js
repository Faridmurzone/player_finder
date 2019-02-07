import React, { Component } from 'react';

class Filters extends Component {
    constructor(){
        super()
        this.state = {playerInput: '', ageInput: ''}
        this.onlyLetters = this.onlyLetters.bind(this)
     }

    onlyLetters = text => {
        const playerInput = (text.target.validity.valid) ? text.target.playerInput : this.state.playerInput;
        this.setState({ playerInput });
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state, 'submit')
    }

    render() {
        return(
            <div className="d-flex justify-content-left m-2">
                <form className="form-inline">
                    <div className="form-group">
                    <input type="text" 
                        className="form-control mr-sm-2" 
                        id="formInputName" 
                        placeholder="Player Name"
                        pattern="[a-zA-z\s]"
                        value={this.state.playerInput} 
                        onChange={this.onlyLetters.bind(this)} />
                    <select className="custom-select" id="formSelectPosition">
                        <option>Position...</option>
                        <option value="1">Attacking Midfield</option>
                        <option value="2">Central Midfield</option>
                        <option value="3">Centre-Forward</option>
                        <option value="4">Defensive Midfield</option>
                        <option value="5">Keeper</option>
                        <option value="6">Left Midfield</option>
                        <option value="7">Left Wing</option>
                        <option value="8">Left Back</option>
                        <option value="9">Right-Back</option>
                    </select>   
                    <input type="number" 
                        className="form-control ml-2" 
                        id="formInputAge" 
                        placeholder="Age" 
                        min="18"
                        max="40"
                        />
                    <button type="button" className="btn btn-light ml-2" onClick={this.handleSubmit}>Filter</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Filters;