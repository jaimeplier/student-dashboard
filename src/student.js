import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import profile from './assets/profile.png';

class Student extends Component {
    viewHome() {
        this.props.history.push('/');
    }

    render () {
        const { StudentStore } = this.props;

        const el = StudentStore.student ? StudentStore.student : {};

        return (
            <div>
                <div className="form-container border">
                    <div className="row">
                        <div className="column">
                            <img className="icon-user" src={profile} />
                            <button onClick={() => this.viewHome()}>Return</button>
                        </div>
                        <div className="column">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>First Name:</td>
                                        <td>{el.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name:</td>
                                        <td>{el.lName}</td>
                                    </tr>
                                    <tr>
                                        <td>Street:</td>
                                        <td>{el.street}</td>
                                    </tr>
                                    <tr>
                                        <td>City:</td>
                                        <td>{el.city}</td>
                                    </tr>
                                    <tr>
                                        <td>State:</td>
                                        <td>{el.state}</td>
                                    </tr>
                                    <tr>
                                        <td>Zipcode:</td>
                                        <td>{el.zipcode}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone:</td>
                                        <td>{el.phoneNum}</td>
                                    </tr>
                                    <tr>
                                        <td>GPA:</td>
                                        <td>{el.GPA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default inject("StudentStore")(observer(Student));