import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToolBtn from './ToolBtn'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    classname: PropTypes.string.isRequired
}

const defaultProps = {

}

class ToolbarInnerA extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={this.props.classname}>
                <ToolBtn classname="tool_btn select" btnclassname="tool_btn_ico grid" divclassname=""></ToolBtn>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico columns" divclassname=""></ToolBtn>
                <div className="divider"></div>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico undo" divclassname=""></ToolBtn>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico redo" divclassname=""></ToolBtn>
                <div className="divider"></div>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico replace" divclassname="arr_sort_down"></ToolBtn>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico extract" divclassname="arr_sort_down"></ToolBtn>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico count-matches" divclassname="arr_sort_down"></ToolBtn>
                <div className="divider"></div>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico split" divclassname="arr_sort_down"></ToolBtn>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico merge" divclassname=""></ToolBtn>
                <div className="divider"></div>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico format" divclassname="arr_sort_down"></ToolBtn>
                <div className="divider"></div>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico group-by" divclassname=""></ToolBtn>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico pivot" divclassname=""></ToolBtn>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico unpivot" divclassname=""></ToolBtn>
                <ToolBtn classname="tool_btn" btnclassname="tool_btn_ico values-to-cols" divclassname=""></ToolBtn>
            </div>
        )
    }
}

ToolbarInnerA.propTypes = propTypes
ToolbarInnerA.defaultProps = defaultProps

export default ToolbarInnerA