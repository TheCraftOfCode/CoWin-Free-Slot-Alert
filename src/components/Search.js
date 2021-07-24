import React from 'react'
import "../App.css"


function Search(props) {

    return (
        <div className="search">
            <input 
                type="number"
                placeholder = "Enter Pin Code" 
                onChange={props.handlePin}
                value = {props.pin}
            />

            <button 
                onClick = {props.handleClick}
            >
                Search Free Slots
            </button>
        </div>
    )
}

export default Search
