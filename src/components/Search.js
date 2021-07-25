import React from 'react'
import "../App.css"

function Search(props) {

    return (
        <form className="search">

            <input 
                type="number"
                placeholder = "Enter Pin Code" 
                onChange={props.handlePin}
                value = {props.pin}
            />

            { !props.isSearching ? 
                <button type ="submit" onClick = {props.handleClick}>
                    Search Free Slots
                </button> : 
                <button type ="submit" >
                    Stop Searching
                </button> 
            }            
        </form>
    )
}

export default Search
