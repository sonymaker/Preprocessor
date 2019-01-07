import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginPage from './pages/LoginPage'
import { hot } from 'react-hot-loader'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    id: PropTypes.string.isRequired

}

const defaultProps = {

}

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id={this.props.id}>
                <LoginPage id="loginPage1" />
            </div>
        )
    }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default hot(module)(App)
