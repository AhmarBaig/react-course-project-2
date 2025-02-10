import React from "react"
import Log from "./components/Log"
import data from "/data"

export default function App() {
    const logs = data.map(d => {
        return (
            <Log 
                title={d.title}
                location={d.location}
                googleMapsUrl={d.googleMapsUrl}
                startDate={d.startDate}
                endDate={d.endDate}
                description={d.description}
                imageUrl={d.imageUrl}  
            />
        )
    });
    
    console.log(logs)
    
    return (
        <div className="main">
            <nav className="main--navbar">
                <img src="./images/earth.png" className="navbar--img" />
                <h2>my travel journal</h2>
            </nav>
            {logs}
        </div>
    )
}