import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToolbarInnerA from './ToolbarInnerA'
import ToolbarInnerB from './ToolbarInnerB'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    classname: PropTypes.string.isRequired
}

const defaultProps = {

}

class ListToolbar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={this.props.classname}>
                <ToolbarInnerA classname="tool_bar_inner_a"></ToolbarInnerA>
                <ToolbarInnerB classname="tool_bar_inner_b"></ToolbarInnerB>
            </div>
        )
    }
}

ListToolbar.propTypes = propTypes
ListToolbar.defaultProps = defaultProps

export default ListToolbar