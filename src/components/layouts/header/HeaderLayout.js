import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

class HeaderLayout extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <h1><a href="index.html" className="logo_ico">Namu Data Preprocessing</a></h1>
                </div>
                <div className="project_sheet">
                    <div className="project_title">프로젝트명</div>
                    <div className="pr_divider"></div>
                    <div className="sheet_ico"></div>
                    <div className="stack_txt">
                        <div className="stack_txt_tit fl">시트 - 4</div>
                        <div className="arr_d fl"></div>
                    </div>
                </div>
                <div className="run_job">
                    <button className="run_job_btn">작업 수행</button>
                </div>
            </div>
        )
    }
}

HeaderLayout.propTypes = propTypes
HeaderLayout.defaultProps = defaultProps

export default HeaderLayout