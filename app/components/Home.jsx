import React, { Component } from 'react';
import { connect } from 'react-redux';

const Main = props => {
    const { campuses } = props;
    return (
        <div>
            <div> Campuses </div>
            { campuses && campuses.map(campus => (
                <div className='campus' key={campus.id}>
                    <div> { campus.name } </div>
                    <img src={campus.image} />
                </div>
            ))}
        </div>
    )

}


const mapState = state => {
    return {
        campuses: state.campus.campuses
    }
}

const mapDispatch = dispatch => {
    return {};
}

export default connect(mapState, mapDispatch)(Main);