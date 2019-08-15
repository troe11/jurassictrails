import React from 'react'

const character = (props) => {
    return (
        <div>
            <p>{props.children}</p>
            <p>Character Name: {props.name}</p>
            <p>Occupation: {props.job}</p>
            <p>Age: {props.age}</p>
            <p>Intelligence: {props.int}</p>
            <p>Current Health: {props.health}</p>
        </div>
        
    )
}

export default character;