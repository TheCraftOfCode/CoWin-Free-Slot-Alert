import React, { useEffect, useState} from 'react'
import Individual from './Individual'
import "./../App.css"
import beep from "./../media/beep.mp3"

function Slots(props) {

    let list = []

    const [view, setView] = useState();
    const audio = new Audio(beep);
    audio.volume = 0.05;

    useEffect(() => {
        for(let i = 0; i < props.centers.length; i++)
        {
            for(let j = 0; j < props.centers[i].sessions.length; j++)
            {   
                
                if(props.centers[i].sessions[j].available_capacity > 0)
                {
                    list.push({
                        name : props.centers[i].name,
                        date:props.centers[i].sessions[j].date,
                        age : props.centers[i].sessions[j].min_age_limit,
                        dose1 :props.centers[i].sessions[j].available_capacity_dose1,
                        dose2: props.centers[i].sessions[j].available_capacity_dose2
                    })
                    
                }   
            }
        }
        if(list) 
        {
            setView(list.map( each => <Individual each = {each} />))
            audio.play()
        }
    }, [])
    return (
        <div className="slot">
            {view ? view : null}
        </div>
    )
}

export default Slots
