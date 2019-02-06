import React, { Component } from 'react';

class Filters extends Component {
    render() {
        return(
            <div>
                <form className="inline-form">
                    <input type="text" className="form-control mb-2 mr-sm-2" id="formInputName" placeholder="Player Name" />
                    <select className="custom-select my-1 mr-sm-2" id="formSelectPosition">
                        <option defaultValue>Position...</option>
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
                    <input type="text" className="form-control mb-2 mr-sm-2" id="formInputAge" placeholder="Age" />
                    <button type="button" className="btn btn-light">Light</button>
                </form>
            </div>
        )
    }
}

export default Filters;