import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListToolbar from './components/ListToolbar'
import DynamicMenu from './components/DynamicMenu'
import ListGroup from './components/ListGroup'
import '../../../css/common.css'
import '../../../css/style_blackSkin_layout.css'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    id: PropTypes.string.isRequired
}

const defaultProps = {

}

class ListWidthLayout extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id={this.props.id} className="cont_section_list fl">
                <ListToolbar classname="list_toolbar"></ListToolbar>
                <DynamicMenu classname="menu_dynamic"></DynamicMenu>
                <ListGroup classname="list_group"></ListGroup>
            </div>
        )
    }
}

ListWidthLayout.propTypes = propTypes
ListWidthLayout.defaultProps = defaultProps

export default ListWidthLayout