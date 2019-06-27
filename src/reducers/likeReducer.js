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
                message: "like",
            };
        case ADD_DISLIKE:
            return{
                ...state,
                message: "dislike",
            };
        default: {
            return state
        }
    }
}