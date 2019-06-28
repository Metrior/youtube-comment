import {ADD_LIKE,ADD_DISLIKE} from "../actions/actionTypes";

const initialState = {
    like: "",
    dislike: "",
};

export default function commentReducer (state=initialState, action) {
    switch (action.type) {
        case ADD_LIKE:
            return{
                ...state,
                like: true,
                dislike: false,
            };
        case ADD_DISLIKE:
            return{
                ...state,
                like: false,
                dislike: true,
            };
        default: {
            return state
        }
    }
}