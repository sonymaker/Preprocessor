import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginLayout from '../layouts/LoginLayout'
import StepWidthLayout from '../layouts/stepwidth/StepWidthLayout'
import ChartWidthLayout from '../layouts/chartwidth/ChartWidthLayout'

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
    width: '100%',
    height: '100%'
}

class LoginPage extends Component {
    render() {
        return (
            <div id={this.props.id} style={{'textAlign':'center', 'position':'absolute', 'width':this.props.width, 'height':this.props.height, 'float':'none'}}>
                <span style={{'display':'inline-block', 'verticalAlign':'middle'}}>
                    <LoginLayout id="layout_login1" />
                    <StepWidthLayout id="stepWidth" />
                    <ChartWidthLayout id="chartWidth" />
                </span>
                <span style={{'display':'inline-block', 'width':'0', 'height':'100%', 'verticalAlign':'middle'}}></span>
            </div>
        )
    }
}

LoginPage.propTypes = propTypes
LoginPage.defaultProps = defaultProps

export default LoginPage
