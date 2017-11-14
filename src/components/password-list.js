import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newPassword, deletePassword } from '../actions'

import Password from './password'

class PasswordList extends Component {
    constructor(props) {
        super(props)
    }

    drawPasswords() {
        return this.props.passwords.map((passwordObj, index) => {
            return <Password
                        key={index}
                        password={passwordObj.password}
                        service={passwordObj.service}
                        index={index}
                        onDelete={() => {
                            this.props.deletePassword(index)
                        }}
                    />
        })
    }

    render() {
        return (
            <div>
                {this.drawPasswords()}

                <button onClick={() => {
                    this.props.newPassword()
                }}>Add new Password</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { passwords: state.passwords }
}

export default connect(
    mapStateToProps,
    {
        newPassword,
        deletePassword
    }
)(PasswordList)
