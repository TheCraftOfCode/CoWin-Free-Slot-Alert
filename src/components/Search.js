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

            { !props.isSearching ? 
                <button 
                    onClick = {props.handleClick}
                    disabled={!props.pin}
                >
                    Search Free Slots
                </button> : 
                <button type ="submit" onClick = {() => window.location.reload()}>
                    Stop Searching
                </button> 
            }            
        </div>
    )
}

export default Search
