import { combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrorReducer'
import PostReducer from './PostReducer'
import CommentReducer from './CommentReducer'

const rootReducer =  combineReducers ({AuthReducer, ErrorReducer,PostReducer,CommentReducer})

export default rootReducer 