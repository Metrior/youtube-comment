// import {ADD_COMMENT} from "../actions/actionTypes";
import { combineReducers } from 'redux';
import singleCommentReducer from "./singleCommentReducer"
import commentsReducer from "./commentsReducer"
import likeReducer from "./likeReducer"

export default combineReducers({
    singleCommentReducer,
    commentsReducer,
    likeReducer,
});