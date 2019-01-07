import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

class ChartWidthLayout extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id={this.props.id} className="cont_section_chart fr">
                <div className='chart_group fl'>
                    <div className='chart_header'>
                        <div className="chart_header_tit">컬럼 그래프</div>
                        <div id="closeChart" className="close_btn"></div>
                    </div>
                    <div id='container' className='chart_cont'>
                        <div className="chart_img"></div>
                        <div className="chart_txtInfo">
                            <ul>
                                <li>총라인 : 1000</li>
                                <li>현재라인 : </li>
                                <li>시작시간 : 1</li>
                                <li>끝시간 : 1000</li>
                                <li>고유값 : </li>
                                <li>중복값 : </li>
                                <li>반값 : </li>
                                <li>다른타입 : </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ChartWidthLayout.propTypes = propTypes
ChartWidthLayout.defaultProps = defaultProps

export default ChartWidthLayout
