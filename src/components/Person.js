import React from 'react'

export default function Person({person}) {
    console.log(person);
    
    return (
        <div>
            <h2>{person.name}</h2>
        </div>
    )
}
