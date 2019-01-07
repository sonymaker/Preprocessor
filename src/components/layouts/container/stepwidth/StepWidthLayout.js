import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Edit_Box from './components/Edit_Box'
import Step_SpanGroup from './components/Step_SpanGroup'
import '../../../../css/common.css'
import '../../../../css/style_blackSkin_layout.css'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    id: PropTypes.string.isRequired
}

const defaultProps = {

}

class StepWidthLayout extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id={this.props.id} className="cont_section_step fl">
                <div className="step_list fl">
                    <ul>
                        <li>
                            <span className="step_spanGroup cf">
                                <span className="step_numb fl">1.</span>
                                <span className="step_label fl">
                                    <em><strong>Change date format</strong></em>
                                    &nbsp;on column&nbsp;
                                    <em>entry_date</em>
                                </span>
                            </span>
                            <div className="step_option">Null 값 채우기</div>
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="2." strong="Extract parts of the text" em="iban" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="3." strong="Replace value" em="" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="4." strong="Reorder columns" em="last_name" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="5." strong="Replace value" em="" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="6." strong="Replace value" em="" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <span className="step_spanGroup cf">
                                <span className="step_numb fl">7.</span>
                                <span className="step_label fl"><em><strong>Lookup</strong></em>&nbsp;done with dataset&nbsp;<em>Customers.</em> Join has been set between<em> id</em> and<em> id.</em> The column<em>MaritalStatus_Out</em> has been added.</span>
                            </span>
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="8." strong="Reorder columns" em="first_name" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="9." strong="Reorder columns" em="entry_data" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="10." strong="Reorder columns" em="first_name" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="11." strong="Reorder columns" em="entry_data" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="12." strong="Extract parts of the text" em="iban" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="13." strong="Extract parts of the text" em="iban" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="14." strong="Extract parts of the text" em="iban" value="on column" />
                            <Edit_Box />
                        </li>
                        <li>
                            <Step_SpanGroup stepnumb="15." strong="Extract parts of the text" em="iban" value="on column" />
                            <Edit_Box />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

StepWidthLayout.propTypes = propTypes
StepWidthLayout.defaultProps = defaultProps

export default StepWidthLayout
