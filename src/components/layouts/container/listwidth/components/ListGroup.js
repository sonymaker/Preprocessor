import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**********************************************************
 * Airbnb React/JSX Style Guide
 * https://github.com/apple77y/javascript/tree/master/react
 **********************************************************/

const propTypes = {
    classname: PropTypes.string.isRequired
}

const defaultProps = {

}

class ListGroup extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={this.props.classname}>
                <table className="list_table">
                    <colgroup>
                        <col width=""></col>
                        <col width=""></col>
                        <col width=""></col>
                        <col width=""></col>
                        <col width=""></col>
                        <col width=""></col>
                        <col width=""></col>
                        <col width=""></col>
                        <col width=""></col>
                        <col width=""></col>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className="col_numb"></td>
                            <th className="cf">
                                <span className="coltit">id</span>
                                <div className="th_icon_box">
                                    <div className="tool_btn_ico">숫자</div>
                                    <div className="arr_d dropdown"></div>
                                </div>
                            </th>
                            <th>
                                <span className="coltit">first_name</span>
                                <div className="th_icon_box">
                                    <div className="tool_btn_ico">문자</div>
                                    <div className="arr_d dropdown"></div>
                                </div>
                            </th>
                            <th>
                                <span className="coltit">last_name</span>
                                <div className="th_icon_box">
                                    <div className="tool_btn_ico">문자</div>
                                    <div className="arr_d dropdown"></div>
                                </div>
                            </th>
                            <th>
                                <span className="coltit">email_first_name_email_last_name</span>
                                <div className="th_icon_box">
                                    <div className="tool_btn_ico">문자</div>
                                    <div className="arr_d dropdown"></div>
                                </div>
                            </th>
                            <th>
                                <span className="coltit">email_first_name_email_last_name_email_domain</span>
                                <div className="th_icon_box">
                                    <div className="tool_btn_ico">문자</div>
                                    <div className="arr_d dropdown"></div>
                                </div>
                            </th>
                            <th>
                                <span className="coltit">company</span>
                                <div className="th_icon_box">
                                    <div className="tool_btn_ico">문자</div>
                                    <div className="arr_d dropdown"></div>
                                </div>
                            </th>
                            <th>
                                <span className="coltit">email_domain</span>
                                <div className="th_icon_box">
                                    <div className="tool_btn_ico">문자</div>
                                    <div className="arr_d dropdown"></div>
                                </div>
                            </th>
                            <th>
                                <span className="coltit">job title</span>
                                <div className="th_icon_box">
                                    <div className="tool_btn_ico">문자</div>
                                    <div className="arr_d dropdown"></div>
                                </div>
                            </th>
                            <th>
                                <span className="coltit">country</span>
                                <div className="th_icon_box">
                                    <div className="tool_btn_ico">문자</div>
                                    <div className="arr_d dropdown"></div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="col_numb"></td>
                            <td className="status_bar"></td>
                            <td className="status_bar"><div className="col_status_tit col_status_blank"></div></td>
                            <td className="status_bar"><div className="col_status_tit"></div></td>
                            <td className="status_bar"></td>
                            <td className="status_bar"></td>
                            <td className="status_bar"></td>
                            <td className="status_bar"></td>
                            <td className="status_bar"></td>
                            <td className="status_bar"></td>
                        </tr>
                        <tr>
                            <td className="col_numb">1</td>
                            <td>9861</td>
                            <td>Jack</td>
                            <td>Sears</td>
                            <td>jack.Sears</td>
                            <td>jack.Sears@photobug.com</td>
                            <td>Photobug</td>
                            <td>photobug.com</td>
                            <td>Electrical Engineer</td>
                            <td>United States</td>
                        </tr>
                        <tr>
                            <td className="col_numb">2</td>
                            <td>3448</td>
                            <td>&nbsp;</td>
                            <td>Fisher</td>
                            <td>mark.Fisher</td>
                            <td>mark.Fisher@thoughtbridge.com</td>
                            <td>Thoughtbridge</td>
                            <td>thoughtbridge.com</td>
                            <td>Physical Therapy Assistant</td>
                            <td>Indonesia</td>
                        </tr>
                        <tr>
                            <td className="col_numb">3</td>
                            <td>9599</td>
                            <td>Clarence</td>
                            <td><span className="error_txt">3215</span></td>
                            <td>clarence.Mcintosh</td>
                            <td>clarence.Mcintosh@cogidoo.biz</td>
                            <td>Cogidoo</td>
                            <td>cogidoo.biz</td>
                            <td>Business Systems Development Analyst</td>
                            <td>Azerbaijan</td>
                        </tr>
                        <tr>
                            <td className="col_numb">4</td>
                            <td>4951</td>
                            <td>Patricia</td>
                            <td>Burke</td>
                            <td>patricia.Burke</td>
                            <td>patricia.Burke@twimbo.edu</td>
                            <td>Twimbo</td>
                            <td>twimbo.edu</td>
                            <td>Account Coordinator</td>
                            <td>Poland</td>
                        </tr>
                        <tr>
                            <td className="col_numb">5</td>
                            <td>7059</td>
                            <td>Ernest</td>
                            <td>Hodge</td>
                            <td>ernest.Hodge</td>
                            <td>ernest.Hodge@roodel.biz</td>
                            <td>Roodel</td>
                            <td>roodel.biz</td>
                            <td>Junior Executive</td>
                            <td>China</td>
                        </tr>
                        <tr>
                            <td className="col_numb">6</td>
                            <td>1046</td>
                            <td>Harold</td>
                            <td>Haley</td>
                            <td>harold.Haley</td>
                            <td>irene.Ruiz@trilia.com</td>
                            <td>Trilia</td>
                            <td>trilia.com</td>
                            <td>Physical Therapy Assistant</td>
                            <td>Guinea</td>
                        </tr>
                        <tr>
                            <td className="col_numb">7</td>
                            <td>6730</td>
                            <td>Irene</td>
                            <td>Ruiz</td>
                            <td>irene.Ruiz</td>
                            <td>irene.Ruiz@trilia.com</td>
                            <td>Trilia</td>
                            <td>trilia.com</td>
                            <td>Physical Therapy Assistant</td>
                            <td>Guinea</td>
                        </tr>
                        <tr>
                            <td className="col_numb">8</td>
                            <td>5294</td>
                            <td>Adam</td>
                            <td>Mullen</td>
                            <td>adam.Mullen</td>
                            <td>adam.Mullen@babbleblab.edu</td>
                            <td>Babbleblab</td>
                            <td>babbleblab.edu</td>
                            <td>Occupational Therapist</td>
                            <td>Ukraine</td>
                        </tr>
                        <tr>
                            <td className="col_numb">9</td>
                            <td>8116</td>
                            <td>Sara</td>
                            <td>Fuller</td>
                            <td>sara.Fuller</td>
                            <td>sara.Fuller@myworks.biz</td>
                            <td>Myworks</td>
                            <td>myworks.biz</td>
                            <td>Occupational Therapist</td>
                            <td>Russia</td>
                        </tr>
                        <tr>
                            <td className="col_numb">10</td>
                            <td>3001</td>
                            <td>Harold</td>
                            <td>Salinas</td>
                            <td>harold.Salinas</td>
                            <td>harold.Salinas@rhyloo.biz</td>
                            <td>Rhyloo</td>
                            <td>rhyloo.biz</td>
                            <td>Chemical Engineer</td>
                            <td>China</td>
                        </tr>
                        <tr>
                            <td className="col_numb">11</td>
                            <td>9147</td>
                            <td>Jonathan</td>
                            <td>Guy</td>
                            <td>jonathan.Guy</td>
                            <td>jonathan.Guy@babbleopia.gov</td>
                            <td>Babbleopia</td>
                            <td>babbleopia.gov</td>
                            <td>Project Manager</td>
                            <td>Bangladesh</td>
                        </tr>
                        <tr>
                            <td className="col_numb">12</td>
                            <td>1639</td>
                            <td>Helen</td>
                            <td>Garcia</td>
                            <td>helen.Garcia</td>
                            <td>helen.Garcia@latz.com</td>
                            <td>Latz</td>
                            <td>latz.com</td>
                            <td>Nurse</td>
                            <td>Brazil</td>
                        </tr>
                        <tr>
                            <td className="col_numb">13</td>
                            <td>6799</td>
                            <td>Joshua</td>
                            <td>Hewitt</td>
                            <td>joshua.Hewitt</td>
                            <td>joshua.Hewitt@vipe.com</td>
                            <td>Vipe</td>
                            <td>vipe.com</td>
                            <td>Actuary</td>
                            <td>Croatia</td>
                        </tr>
                        <tr>
                            <td className="col_numb">14</td>
                            <td>5566</td>
                            <td>Sandra</td>
                            <td>Sanders</td>
                            <td>sandra.Sanders</td>
                            <td>sandra.Sanders@plajo.edu</td>
                            <td>Plajo</td>
                            <td>plajo.edu</td>
                            <td>Human Resources Manager</td>
                            <td>Ireland</td>
                        </tr>
                        <tr>
                            <td className="col_numb">15</td>
                            <td>8786</td>
                            <td>Annie</td>
                            <td>Gallegos</td>
                            <td>annie.Gallegos</td>
                            <td>annie.Gallegos@realbridge.com</td>
                            <td>Realbridge</td>
                            <td>realbridge.com</td>
                            <td>Sales Representative</td>
                            <td>Indonesia</td>
                        </tr>


                        <tr>
                            <td className="col_numb">16</td>
                            <td>9861</td>
                            <td>Jack</td>
                            <td>Sears</td>
                            <td>jack.Sears</td>
                            <td>jack.Sears@photobug.com</td>
                            <td>Photobug</td>
                            <td>photobug.com</td>
                            <td>Electrical Engineer</td>
                            <td>United States</td>
                        </tr>
                        <tr>
                            <td className="col_numb">17</td>
                            <td>3448</td>
                            <td>Mark</td>
                            <td>Fisher</td>
                            <td>mark.Fisher</td>
                            <td>mark.Fisher@thoughtbridge.com</td>
                            <td>Thoughtbridge</td>
                            <td>thoughtbridge.com</td>
                            <td>Physical Therapy Assistant</td>
                            <td>Indonesia</td>
                        </tr>
                        <tr>
                            <td className="col_numb">18</td>
                            <td>9599</td>
                            <td>Clarence</td>
                            <td>Mcintosh</td>
                            <td>clarence.Mcintosh</td>
                            <td>clarence.Mcintosh@cogidoo.biz</td>
                            <td>Cogidoo</td>
                            <td>cogidoo.biz</td>
                            <td>Business Systems Development Analyst</td>
                            <td>Azerbaijan</td>
                        </tr>
                        <tr>
                            <td className="col_numb">19</td>
                            <td>4951</td>
                            <td>Patricia</td>
                            <td>Burke</td>
                            <td>patricia.Burke</td>
                            <td>patricia.Burke@twimbo.edu</td>
                            <td>Twimbo</td>
                            <td>twimbo.edu</td>
                            <td>Account Coordinator</td>
                            <td>Poland</td>
                        </tr>
                        <tr>
                            <td className="col_numb">20</td>
                            <td>7059</td>
                            <td>Ernest</td>
                            <td>Hodge</td>
                            <td>ernest.Hodge</td>
                            <td>ernest.Hodge@roodel.biz</td>
                            <td>Roodel</td>
                            <td>roodel.biz</td>
                            <td>Junior Executive</td>
                            <td>China</td>
                        </tr>
                        <tr>
                            <td className="col_numb">21</td>
                            <td>1046</td>
                            <td>Harold</td>
                            <td>Haley</td>
                            <td>harold.Haley</td>
                            <td>irene.Ruiz@trilia.com</td>
                            <td>Trilia</td>
                            <td>trilia.com</td>
                            <td>Physical Therapy Assistant</td>
                            <td>Guinea</td>
                        </tr>
                        <tr>
                            <td className="col_numb">22</td>
                            <td>6730</td>
                            <td>Irene</td>
                            <td>Ruiz</td>
                            <td>irene.Ruiz</td>
                            <td>irene.Ruiz@trilia.com</td>
                            <td>Trilia</td>
                            <td>trilia.com</td>
                            <td>Physical Therapy Assistant</td>
                            <td>Guinea</td>
                        </tr>
                        <tr>
                            <td className="col_numb">23</td>
                            <td>5294</td>
                            <td>Adam</td>
                            <td>Mullen</td>
                            <td>adam.Mullen</td>
                            <td>adam.Mullen@babbleblab.edu</td>
                            <td>Babbleblab</td>
                            <td>babbleblab.edu</td>
                            <td>Occupational Therapist</td>
                            <td>Ukraine</td>
                        </tr>
                        <tr>
                            <td className="col_numb">24</td>
                            <td>8116</td>
                            <td>Sara</td>
                            <td>Fuller</td>
                            <td>sara.Fuller</td>
                            <td>sara.Fuller@myworks.biz</td>
                            <td>Myworks</td>
                            <td>myworks.biz</td>
                            <td>Occupational Therapist</td>
                            <td>Russia</td>
                        </tr>
                        <tr>
                            <td className="col_numb">25</td>
                            <td>3001</td>
                            <td>Harold</td>
                            <td>Salinas</td>
                            <td>harold.Salinas</td>
                            <td>harold.Salinas@rhyloo.biz</td>
                            <td>Rhyloo</td>
                            <td>rhyloo.biz</td>
                            <td>Chemical Engineer</td>
                            <td>China</td>
                        </tr>
                        <tr>
                            <td className="col_numb">26</td>
                            <td>9147</td>
                            <td>Jonathan</td>
                            <td>Guy</td>
                            <td>jonathan.Guy</td>
                            <td>jonathan.Guy@babbleopia.gov</td>
                            <td>Babbleopia</td>
                            <td>babbleopia.gov</td>
                            <td>Project Manager</td>
                            <td>Bangladesh</td>
                        </tr>
                        <tr>
                            <td className="col_numb">27</td>
                            <td>1639</td>
                            <td>Helen</td>
                            <td>Garcia</td>
                            <td>helen.Garcia</td>
                            <td>helen.Garcia@latz.com</td>
                            <td>Latz</td>
                            <td>latz.com</td>
                            <td>Nurse</td>
                            <td>Brazil</td>
                        </tr>
                        <tr>
                            <td className="col_numb">28</td>
                            <td>6799</td>
                            <td>Joshua</td>
                            <td>Hewitt</td>
                            <td>joshua.Hewitt</td>
                            <td>joshua.Hewitt@vipe.com</td>
                            <td>Vipe</td>
                            <td>vipe.com</td>
                            <td>Actuary</td>
                            <td>Croatia</td>
                        </tr>
                        <tr>
                            <td className="col_numb">29</td>
                            <td>5566</td>
                            <td>Sandra</td>
                            <td>Sanders</td>
                            <td>sandra.Sanders</td>
                            <td>sandra.Sanders@plajo.edu</td>
                            <td>Plajo</td>
                            <td>plajo.edu</td>
                            <td>Human Resources Manager</td>
                            <td>Ireland</td>
                        </tr>
                        <tr>
                            <td className="col_numb">30</td>
                            <td>8786</td>
                            <td>Annie</td>
                            <td>Gallegos</td>
                            <td>annie.Gallegos</td>
                            <td>annie.Gallegos@realbridge.com</td>
                            <td>Realbridge</td>
                            <td>realbridge.com</td>
                            <td>Sales Representative</td>
                            <td>Indonesia</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

ListGroup.propTypes = propTypes
ListGroup.defaultProps = defaultProps

export default ListGroup