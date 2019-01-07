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

class DynamicMenu extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={this.props.classname}>
                <div className="menu_item_txt">Convert to UPPERCASE</div>
                <div className="menu_item_txt">Convert to lowercase</div>
                <div className="menu_item_txt">Convert to Proper Case</div>
                <div className="menu_dynamic_divider"></div>

                <div className="menu_item_txt">Trim leading and trailing whitespaces</div>
                <div className="menu_item_txt">Trim leading and trailing quotes</div>
                <div className="menu_dynamic_divider"></div>

                <div className="menu_item_txt">Remove whitespace</div>
                <div className="menu_item_txt">Remove symbols</div>
                <div className="menu_dynamic_divider"></div>

                <div className="menu_item_txt">Add prefix</div>
                <div className="menu_item_txt">Add suffix</div>
                <div className="menu_item_txt">Pad text with leading characters</div>
            </div>
        )
    }
}

DynamicMenu.propTypes = propTypes
DynamicMenu.defaultProps = defaultProps

export default DynamicMenu