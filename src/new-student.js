import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

class NewStudent extends Component {
    constructor(props) {
        super(props)
        // this.viewUser = this.viewUser.bind(this)
    }
    
    handleSubmit() {
        const { StudentStore } = this.props;
        const student = {
            name: document.getElementById('name').value,
            lName: document.getElementById('lname').value,
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zipcode: document.getElementById('zipcode').value,
            phoneNum: document.getElementById('phoneNum').value,
            GPA: document.getElementById('gpa').value,
        }
        StudentStore.addStudent(student)
        this.props.history.push('/');
    }

    render () {
        
       

        return (
            <div>
                <form className="form-container">
                    <table >
                        <thead>
                            <tr>
                            <th colSpan="2">Submit a new student!</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>First name</td>
                            <td><input type="text" id="name"/></td>
                        </tr>
                        <tr>
                            <td>Last name</td>
                            <td><input type="text" id="lname"/></td>
                        </tr>
                        <tr>
                            <td>Street</td>
                            <td><input type="text" id="street"/></td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td><input type="text" id="city"/></td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td><input type="text" id="state"/></td>
                        </tr>
                        <tr>
                            <td>Zipcode</td>
                            <td><input type="number" id="zipcode"/></td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td><input type="number" id="phoneNum"/></td>
                        </tr>
                        <tr>
                            <td>GPA</td>
                            <td><input type="number" id="gpa"/></td>
                        </tr>
                        </tbody>
                    </table>
                    <button onClick={() => this.handleSubmit()} className="form-btn">Add Student</button>
                </form>
            </div>
        )
    }
}

export default inject("StudentStore")(observer(NewStudent));