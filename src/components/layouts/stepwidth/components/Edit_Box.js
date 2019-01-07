import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    
}

const defaultProps = {

}

class Edit_Box extends Component {
    render() {
        return (
            <div className="edit_box">
                <button className="edit_ico"></button>
                <button className="delete_ico"></button>
            </div>
        )
    }
}

Edit_Box.propTypes = propTypes
Edit_Box.defaultProps = defaultProps

export default Edit_Box
