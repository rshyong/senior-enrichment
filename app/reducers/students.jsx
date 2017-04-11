const ALL_STUDENTS = 'ALL_STUDENTS';

export const getStudents = students => {
    return {
        type: ALL_STUDENTS,
        students
    }
}

const rootReducer = (state = {}, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case ALL_STUDENTS:
            newState.students = action.students;
            break;
        default: return state;
    }
    return newState;
};

export default rootReducer;
