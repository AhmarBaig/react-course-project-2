import React from "react"

export default function Log(props) {
    
    return (
        <div className="log">
            <img src={`./images/${props.imageUrl}`} className="log--img"/>
            
            <div className="log--main">
                <div className="log--location">
                    <img src="./images/location.png" className="log--marker" />
                    <h3 className="log--title">{props.location}</h3>
                    <a href={props.googleMapsUrl} className="log--link">View on Google Maps</a> 
                </div>
                
                <div className="log--details">
                    <h1>{props.title}</h1>
                    <p>{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
