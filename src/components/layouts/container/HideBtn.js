import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    id: PropTypes.string.isRequired,
    classname: PropTypes.string.isRequired
}

const defaultProps = {

}

class HideBtn extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id={this.props.id} className={this.props.classname}></div>
        )
    }
}

HideBtn.propTypes = propTypes
HideBtn.defaultProps = defaultProps

export default HideBtn