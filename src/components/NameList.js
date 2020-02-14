import React from 'react'
import Person from './Person'
function NameList() {
    const names =  [ "hanu", "foo", "bar", "foo"];
    const Persons = [
        {
            name:"hanuman",
            age : 25,
            skill: "react"
        },
        {
            name:"Ravi",
            age : 25,
            skill: "react"
        },
        {
            name:"Foo",
            age : 25,
            skill: "react"
        }
    ]
    const nameList =  names.map((name, index) =>  <h2 key={index}>{index},{name}</h2>)
    return (
        <div>
            {
                    nameList
            }
        </div>
    )
}

export default NameList
