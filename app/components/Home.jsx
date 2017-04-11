import React, { Component } from 'react';
import { connect } from 'react-redux';

const Main = props => {
    const { campuses, students } = props;
    console.log(campuses, students);
    return (
        <div>
            <div className='campusPage'>
                <div className='campusTitle'>Campuses</div>
                { campuses && campuses.map(campus => (
                    <div className='campus' key={campus.id}>
                        <div> { campus.name } </div>
                        <img src={campus.image} />
                    </div>
                ))}
            </div>
            <div className='studentsPage'>
                <div className='studentTitle'>Students</div>
                {students && students.map(student => {
                    return (<div className='student' key={student.id}>
                        <div>{student.name}</div>
                        <div>{student.email}</div>
                    </div>)
                })}
            </div>
        </div>
    )

}


const mapState = state => {
    return {
        campuses: state.campus.campuses,
        students: state.students.students
    }
}

const mapDispatch = dispatch => {
    return {};
}

export default connect(mapState, mapDispatch)(Main);