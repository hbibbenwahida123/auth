import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getOnePost } from "../Redux/Actions/PostAction"
import DeletePost from "./DeletePost"
import { current } from "../Redux/Actions/AuthAction"
import './PostDescription.css'
import ListComments from "./ListComments"
import { addComment } from "../Redux/Actions/CommentAction"

const PostDescription = ()=> {

    const {id} = useParams()

    const [comment,setComment] = useState('')
    const dispatch = useDispatch()
        
                useEffect(()=>{
                  dispatch(current())
                dispatch(getOnePost(id))
    
                },[dispatch, id])
    const user = useSelector(state => state.AuthReducer.user)
        
    const onePost = useSelector(state =>state.PostReducer.onePost)
    return(
        <div className="post-description-container">
          <div className="post-description-content">
            <img 
              src={onePost.image} 
              alt={onePost.titre}
              className="post-description-image"
              onError={(e) => {
                e.target.src = '/UserImage.png';
              }}
            />
            <h3 className="post-description-title">{onePost.titre}</h3>  
            <p className="post-description-text">{onePost.description}</p>  

            <div className="post-description-actions">
              {onePost.owner === user._id && (
                <Link 
                  to={`/EditPost/${onePost._id}`} 
                  className="post-description-btn post-description-btn-edit"
                >
                  Modifier
                </Link>
              )}
              
              {((onePost.owner === user._id) || (user.role === 'admin')) && (
                <DeletePost onePost={onePost}/>
              )}
                   <br/>

                 <div>
            <input value={comment} type="text" onChange={(e)=> setComment(e.target.value)}/>
            <button onClick={()=> {dispatch(addComment({comment, post : id},id));setComment('')}}>Add Comment</button>

            <br/>
              <ListComments id={id}/>
          </div>
            </div>
          </div>

        

       
        </div>
    )
}

export default PostDescription