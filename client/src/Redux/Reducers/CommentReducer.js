import { GETCOMMENTSBYPOST } from "../ActionTypes/CommentTypes"

const initialState ={
    comments : []
}

const CommentReducer =(state = initialState, action ) => {
   switch (action.type) {
           case GETCOMMENTSBYPOST : return {...state, comments : action.payload}
           default: return state
               
       }
}

export default CommentReducer