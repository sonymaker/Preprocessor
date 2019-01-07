import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavItem from './components/NavItem'
import '../../../css/common.css'
import '../../../css/style_blackSkin_layout.css'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {

}

const defaultProps = {

}

class NavigationLayout extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="navigation">
                <div className="nav_pages">
                    <NavItem href="project.html" classname="nav_project"></NavItem>
                    <div className="nav_divider"></div>
                    <NavItem href="library.html" classname="nav_library"></NavItem>
                    <div className="nav_divider"></div>
                    <NavItem href="pr_sheet.html" classname="nav_item_2"></NavItem>
                    <div className="nav_divider"></div>
                    <NavItem href="pr_sheet_layout.html" classname="nav_item_3"></NavItem>
                </div>
                <div className="nav_footer">
                    <div className="nav_ico">
                        <a href="#" className="help_ico"></a>
                    </div>
                </div>
            </div>
        )
    }
}

NavigationLayout.propTypes = propTypes
NavigationLayout.defaultProps = defaultProps

export default NavigationLayout