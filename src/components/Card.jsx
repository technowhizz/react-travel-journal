import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {

    return (
        <div className="card--parent">
            {props.exp.id !=1 && <hr className="card--divider"></hr>}
            <div className="card">
                <img className="card--image" src={`images/${props.exp.image}`} />
                <div className="card--info">
                    <div className="card--stats">
                        <i className="fa-solid fa-location-dot" />
                        <h4 className="card--country">{props.exp.country}</h4>
                        {props.exp.link && <a className="card--location-link" href={props.exp.link}>View on Google Maps</a>}
                    </div>
                    <h1 className="card--name">{props.exp.name}</h1>
                    <p className="card--dates">{props.exp.dates}</p>
                    <p className="card--description">{props.exp.description}</p>
                </div>
            </div>
        </div>
    )
}