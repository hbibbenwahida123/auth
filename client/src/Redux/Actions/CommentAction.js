import { GETCOMMENTSBYPOST } from "../ActionTypes/CommentTypes"
import axios from 'axios'

export const GetAllCommentsByPost =(id)=>async(dispatch)=>{
try {
   const res =  await axios.get(`/Comment/GetAllCommentsByPost/${id}`)

   dispatch (
    {
        type : GETCOMMENTSBYPOST ,
        payload : res.data.Comments
    }
   )

} catch (error) {
    console.log(error)
}
}

export const addComment=(newCommentAdded,id)=>async(dispatch)=>{
    try {
      await axios.post('/Comment/AddComment', newCommentAdded, {
        headers : {
            Autorized : localStorage.getItem('token')
        }
    })

      dispatch(GetAllCommentsByPost(id))
 
    } catch (error) {
        console.log(error)
    }

}

export const deleteComment=(ids)=>async(dispatch)=>{
    try {
        await axios.delete(`/Comment/DeleteComment/${ids.idComment}`)

        dispatch(GetAllCommentsByPost(ids.idPost))
        
        
    } catch (error) {
        console.log(error)
    }
}


export const editComment=(ids, upComment)=>async(dispatch)=>{
    try {
        await axios.put(`/Comment/UpComment/${ids.idComment}`, upComment)

         dispatch(GetAllCommentsByPost(ids.idPost))
    } catch (error) {
        console.log(error)
    }
}