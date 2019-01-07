import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    stepnumb: PropTypes.string.isRequired,
    strong: PropTypes.string,
    em: PropTypes.string,
    value: PropTypes.string
}

const defaultProps = {
    stepnumb: '',
    strong: '',
    em: '',
    value: ''
}

class Step_SpanGroup extends Component {
    render() {
        return (
            <span className="step_spanGroup">
                <span className="step_numb fl">{this.props.stepnumb}</span>
                <span className="step_label fl">
                    <em><strong>{this.props.strong}</strong></em>&nbsp;{this.props.value}&nbsp;<em>{this.props.em}</em>
                </span>
            </span>
        )
    }
}

Step_SpanGroup.propTypes = propTypes
Step_SpanGroup.defaultProps = defaultProps

export default Step_SpanGroup
