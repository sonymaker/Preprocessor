import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    classname: PropTypes.string.isRequired
}

const defaultProps = {

}

class ToolbarInnerB extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={this.props.classname}>
                <div id="edit_btn" className="data_btn">
                    <button>전체 데이터</button>
                </div>
                <div className="divider"></div>
                <div className="data_btn">
                    <button>샘플</button>
                </div>
            </div>
        )
    }
}

ToolbarInnerB.propTypes = propTypes
ToolbarInnerB.defaultProps = defaultProps

export default ToolbarInnerB