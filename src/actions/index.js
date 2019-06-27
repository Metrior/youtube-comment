import * as ActionTypes from "./actionTypes";

export const sendComment = comment =>{
    return{
        type: ActionTypes.ADD_COMMENT,
        payload: comment,
    }
};

export const addLike = index =>{
    return{
        type: ActionTypes.ADD_LIKE,
        payload: index,
    }
};

export const addDislike = index =>{
    return{
        type: ActionTypes.ADD_DISLIKE,
        payload: index,
    }
};