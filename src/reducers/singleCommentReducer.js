import {ADD_COMMENT} from "../actions/actionTypes";

const initialState = {
    comment: "",
};

export default function commentReducer (state=initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return{
                ...state,
                comment: action.payload,
            };
        default: {
            return state
        }
    }
}