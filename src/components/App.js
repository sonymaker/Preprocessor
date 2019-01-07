import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginPage from './pages/LoginPage'
import { hot } from 'react-hot-loader'
import PrSheetPage from './pages/PrSheetPage';

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    id: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
}

const defaultProps = {
    width:'100%',
    height:'100%'
}

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id={this.props.id} style={{'width':this.props.width, 'height':this.props.height}}>
                {/* <LoginPage id="loginPage1" /> */}
                <PrSheetPage/>
            </div>
        )
    }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default hot(module)(App)
