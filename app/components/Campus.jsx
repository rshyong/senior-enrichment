import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

export default class Campus extends Component {
    constructor(props) {
        super(props);
    }

    formSubmit(e) {
        e.preventDefault();
        axios.post('/api/campus', {
            name: e.target.name.value,
            image: e.target.image.value
        })
        .then(()=> {
            browserHistory.push('/');
        })
        .catch(err => {
        console.log('campus post unsuccessful', err);
        })
    }

    render() {
        return (
            <div>
                <div> Enter New School Below! </div>
                <form onSubmit={this.formSubmit}>
                    Name: <input type='text' name='name' />
                    Image: <input type='text' name='image' />
                    <br/>
                    <button type='submit'> Submit </button>
                </form>
            </div>
        )
    }
}
