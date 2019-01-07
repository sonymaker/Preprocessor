import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    classname: PropTypes.string.isRequired,
    btnclassname: PropTypes.string.isRequired,
    divclassname: PropTypes.string
}

const defaultProps = {
    divclassname: ''
}

class ToolBtn extends Component {
    constructor() {
        super()
    }

    render() {
        let div = null

        if (this.props.divclassname != '' || this.props.divclassname != null) {
            div = <div className={this.props.divclassname}></div>
        }

        return (
            <div className={this.props.classname}>
                <button className={this.props.btnclassname}></button>
                {div}
            </div>
        )
    }
}

ToolBtn.propTypes = propTypes
ToolBtn.defaultProps = defaultProps

export default ToolBtn