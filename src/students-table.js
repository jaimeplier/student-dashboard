import React, { Component, Fragment } from 'react';
import STUDENTS from './data/students';
import trash from './assets/trash.png';
import { inject, observer } from "mobx-react";
import { withRouter, Link } from "react-router-dom";

class Students extends Component {
    constructor(props) {
        super(props)
        this.viewUser = this.viewUser.bind(this)
    }
    
    viewUser(i) {
        const { StudentStore } = this.props;
        
        StudentStore.setStudent(i)
        this.props.history.push('/profile');
    }
    
    addUser() {
        this.props.history.push('/new');
    }
    
    render() {
        const { StudentStore } = this.props;
        
        function removeUser (idx) {
            StudentStore.deleteStudent(idx)
        }
        
    const studentList = StudentStore.students.map((STUDENT, idx) => {
        return (
            <Fragment>
            <tr key={STUDENT.phoneNum} className="pointer">
                <td onClick={() => this.viewUser(idx)}>{ STUDENT.name }</td>
                <td onClick={() => this.viewUser(idx)}>{ STUDENT.lName }</td>
                <td onClick={() => this.viewUser(idx)}>{ STUDENT.street }</td>
                <td onClick={() => this.viewUser(idx)}>{ STUDENT.city  }</td>
                <td onClick={() => this.viewUser(idx)}>{ STUDENT.state  }</td>
                <td onClick={() => this.viewUser(idx)}>{ STUDENT.zipcode  }</td>
                <td onClick={() => this.viewUser(idx)}>{ STUDENT.phoneNum  }</td>
                <td onClick={() => this.viewUser(idx)}>{ STUDENT.GPA }</td>
                <td>
                    <img className="trashIcon pointer" src={trash} onClick={() => removeUser(idx)} />
                </td>
            </tr>
            </Fragment>
        )
    })

        return (
        <div>
            <div className="table-container">
                <table>
                <thead>    
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zipcode</th>
                        <th>Phone</th>
                        <th>GPA</th>
                        <th ></th>
                    </tr>
                </thead>

                    <tbody>
                    {studentList}    
                    </tbody>
                </table>

                <div className=" user-box">
                <div style={{width: "auto", float: "right", padding: "65px ",display: "flex"}}>
                
                    <button onClick={() => this.addUser()} className="form-btn"> 
                        <img className="addIcon" src="/assets/add.svg" alt="" /> 
                        Add new student
                    </button>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default inject("StudentStore")(observer(Students));