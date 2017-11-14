import React, { Component } from 'react'

class Password extends Component {

    render() {
        return (
            <div>

                <h1>{this.props.password}</h1>

                <p>{this.props.service}</p>

                <button onClick={() => {
                    this.props.onDelete()
                }}>Delete</button>

            </div>
        )
    }
}

export default Password
