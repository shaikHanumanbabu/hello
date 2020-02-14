import React, { Component, PureComponent } from 'react'

class RegCom extends PureComponent {
    render() {
        console.log('RegCom componet');

        return (
            <div>
                regular Component
                {this.props.name}
            </div>
        )
    }
}

export default RegCom
