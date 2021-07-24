import React from 'react'
import "./../App.css"

function Individual(props) {
    return (
        <div className="hospital">
            <div><strong>Hospital: &ensp;</strong>{props.each.name}</div>
            <div><strong>Date:&ensp;</strong>{props.each.date}</div>
            <div><strong>Age:&ensp;</strong>{props.each.age}+</div>
            <div><strong>Dose 1:&ensp;</strong>{props.each.dose1} slots</div>
            <div><strong>Dose 2:&ensp;</strong>{props.each.dose2} slots</div>
        </div>
    )
}

export default Individual
