import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

const studentSubmit = e => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    axios.get(`/api/campus/${e.target.school.value}`)
    .then( id => id.data)
    .then(id => {
        axios.post('/api/students', {
            name,
            email,
            campusId: id
        })
    })
    .then(() => {
        browserHistory.push('/');
    })
}
const Students = props => {
    return (
        <form onSubmit={studentSubmit}>
            Name:
            <input type='text' name='name'/>
            Email:
            <input type='text' name='email'/>
            School:
            <input type='text' name='school'/>
            <br/>
            <button type='submit'>Submit </button>
        </form>
    )
}

export default Students;