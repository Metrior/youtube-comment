import {GET_COMMENTS} from "../actions/actionTypes";

const initialState = {
    comments: [],
};

export default function commentReducer (state=initialState, action) {
    switch (action.type) {
        case GET_COMMENTS: {
            const comments = action.payload ? Object.values(action.payload) : [];
            const PARSED_MESSAGE = [];
            for (let i = 0; i < comments.length; i++) {
                PARSED_MESSAGE.push({
                    id: Object.keys(action.payload)[i],
                    comment: comments[i].comment,
                    name: comments[i].name
                })
            }
            return {
                ...state,
                comments: PARSED_MESSAGE,
                status: {status: 'success'}
            }
        }
        default: {
            return state
        }
    }
}