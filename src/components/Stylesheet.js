import React from 'react'
import './css/style.css'
function Stylesheet(props) {
    const className = props.check ? 'primary' :'';
    return (
        <div>
            <h1 className={className}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
