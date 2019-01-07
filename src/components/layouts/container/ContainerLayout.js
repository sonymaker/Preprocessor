import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StepWidthLayout from './stepwidth/StepWidthLayout'
import HideBtn from './HideBtn'
import ListWidthLayout from './listwidth/ListWidthLayout'
import ChartWidthLayout from './chartwidth/ChartWidthLayout'
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

class ContainerLayout extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">
                <div className="cont_section cf">
                    <StepWidthLayout id="stepWidth"></StepWidthLayout>
                    <HideBtn id="hide_stepBtn" classname="cont_togBtn fl"></HideBtn>
                    <ListWidthLayout id="listWidth"></ListWidthLayout>
                    <ChartWidthLayout id="chartWidth"></ChartWidthLayout>
                    <HideBtn id="hide_chartBtn" classname="cont_togBtn fr"></HideBtn>
                </div>
            </div>
        )
    }
}

ContainerLayout.propTypes = propTypes
ContainerLayout.defaultProps = defaultProps

export default ContainerLayout