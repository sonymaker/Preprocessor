import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    id: PropTypes.string.isRequired
}

const defaultProps = {

}

class LoginLayout extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id={this.props.id} style={{'width': '380px', 'display': 'inline-block', 'margin':'5px', 'float':'none'}}>
                <input type="input" className="form-control" placeholder="Username" aria-describedby="basic-addon1" style={{'width': '300px', 'height':'30px', 'display': 'inline-block', 'float': 'left', 'marginBottom':'5px'}} />
                <input type="password" className="form-control" placeholder="Password" aria-describedby="basic-addon1" style={{'width': '300px', 'height':'30px', 'display': 'inline-block', 'float': 'left'}} />
                <input type="button" className="btn btn-default" style={{'width': '70px', 'height':'75px'}} value="Login" onClick={this.onLoginButtonClick} />
            </div>
        )
    }
}

LoginLayout.propTypes = propTypes
LoginLayout.defaultProps = defaultProps

export default LoginLayout
