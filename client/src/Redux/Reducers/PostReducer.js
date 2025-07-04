import {  GETALLPOSTS, GETMYPOSTS } from "../ActionTypes/PostActionTypes"
import { GETONEPOST } from "../ActionTypes/PostActionTypes"

const initialState = {
    posts : [],
    onePost : {},
    myPosts : []
}
const PostReducer = (state = initialState, action)=> {
    switch (action.type) {
        
    case GETALLPOSTS : return {...state, posts : action.payload}
    case GETONEPOST: return {...state , onePost : action.payload}
    case GETMYPOSTS: return {...state , myPosts : action.payload}
        default: return state
            
    }
}

export default PostReducer