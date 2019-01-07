import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    href: PropTypes.string.isRequired,
    classname: PropTypes.string.isRequired
}

const defaultProps = {

}

class NavItem extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="nav_item">
                <a href={this.props.href} className={this.props.classname}></a>
            </div>
        )
    }
}

NavItem.propTypes = propTypes
NavItem.defaultProps = defaultProps

export default NavItem