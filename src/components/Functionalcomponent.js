import React from 'react'

function Functionalcomponent() {
    function clickHandler() {
        console.log('N');
        
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default Functionalcomponent
