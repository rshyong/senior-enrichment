import axios from 'axios';

const ADD_CAMPUS = 'ADD_CAMPUS';

export const editCampus = (campus) => {
    return {
        type: ADD_CAMPUS, campus
    }
}

const rootReducer = function(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case ADD_CAMPUS:
            newState.campusName = action.campus.name;
            newState.campusImg = action.campus.img;
            break;
        default: return state
    }
    return newState;
};

export default rootReducer;

export const postCampus = (name, image) => {
    console.log('hi');
    axios.post('/api/campus', {
        name, image
    })
    .catch(err => {
      console.log('campus post unsuccessful', err);
    })
}