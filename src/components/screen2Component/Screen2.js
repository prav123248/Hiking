import React, {Component} from 'react';
import '../../styles/common.css';
import Header from '../headerComponent/header';
import Toolbar from '../toolbarComponent/toolbar';
import './style.css';
import add from '../../assets/icons/add.png';
import subtract from '../../assets/icons/minus.png';

export default class Screen3 extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
                
            <div id="screen2" className="container">   
                <Header />
                <div class="upperScrollContainer trailList">

                    <div class="titleSection">
                        <h2>List of trails</h2>
                        <div id="listChangeButtons">
                            <img class="listIcon addButton" src={add}/>
                            <img class="listIcon subtractButton" src={subtract}/>
                        </div>
                    </div>

                    <div class="scrollableTable">
                        <table>
                            <tbody>
                                <tr>
                                    <th class="scheduleName">Trail Name</th>
                                    <th class="scheduleDate">Date</th>
                                </tr>

                                <tr>
                                    <td class="scheduleName">Harrow</td>
                                    <td class="scheduleDate">23/01/21</td>
                                </tr>   

                                <tr>
                                    <td class="scheduleName">Britain</td>
                                    <td class="scheduleDate">23/01/21</td>
                                </tr>   
                                <tr>
                                    <td class="scheduleName">Britain and some other land </td>
                                    <td class="scheduleDate">23/01/21</td>
                                </tr>   

                                <tr>
                                    <td class="scheduleName">Britain and some other land </td>
                                    <td class="scheduleDate">23/01/21</td>
                                </tr> 

                                <tr>
                                    <td class="scheduleName">Britain and some other land </td>
                                    <td class="scheduleDate">23/01/21</td>
                                </tr> 

                                <tr>
                                    <td class="scheduleName">Britain and some other land </td>
                                    <td class="scheduleDate">23/01/21</td>
                                </tr> 

                                <tr>
                                    <td class="scheduleName">Britain and some other land </td>
                                    <td class="scheduleDate">23/01/21</td>
                                </tr> 

                                <tr>
                                    <td class="scheduleName">Britain and some other land </td>
                                    <td class="scheduleDate">23/01/21</td>
                                </tr> 
                            </tbody>
                        </table>

                    </div>
                </div>

                <div class="addSchedule">


                    <h3>Schedule a Hike</h3>
                    <div class="formContainer">
                        <div class="smallPadding scheduleSelecter">
                            <select name="trails">
                                <option value="" selected="selected" disabled>Select Trail</option>
                                <option value="London">London</option>
                                <option value="London">London</option>
                                <option value="London">London</option>
                                <option value="London">London</option>
                                <option value="London">London</option>
                                <option value="London">London</option>
                                <option value="London">London</option>
                                <option value="London">London</option>
                                <option value="London">London</option>
                                <option value="London">London</option>
                                <option value="London">London</option>
                                <option value="London">London</option>
                            </select>
                        </div>

                        <div class="smallPadding">
                            <input type="date" name="scheduledDate"/>
                        </div>

                        <input id="scheduleSubmit" type="submit" value="Submit"/>
                    </div>

                        

                </div>
                <Toolbar instance={this.props.instance} screen={2}  />
            </div>

            
        );
    }
}
