import React, { PureComponent } from 'react'

class PureCom extends PureComponent {
    render() {
        console.log('PureCom componet');

        return (
            <div>
                 Pure Component
                {this.props.name}
                <h5>Pure component</h5>
            </div>
        )
    }
}

export default PureCom
