const ALL_CAMPUS = 'ALL_CAMPUS';

export const getCampus = campuses => {
    return {
        type: ALL_CAMPUS,
        campuses
    }
}

const rootReducer = function(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case ALL_CAMPUS:
            newState.campuses = action.campuses;
            break;
        default: return state;
    }
    return newState;
};

export default rootReducer;
