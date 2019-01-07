import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavigationLayout from '../layouts/navigation/NavigationLayout'
import ContainerLayout from '../layouts/container/ContainerLayout'
import HeaderLayout from '../layouts/header/HeaderLayout'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/



const propTypes = {

}

const defaultProps = {

}

class PrSheetPage extends Component {
    render() {
        return (
            <div className="wrap">
                <HeaderLayout></HeaderLayout>
                <NavigationLayout></NavigationLayout>
                <ContainerLayout></ContainerLayout>
            </div>
        )
    }
}

PrSheetPage.propTypes = propTypes
PrSheetPage.defaultProps = defaultProps

export default PrSheetPage
