import axios from 'axios'
import { GETALLPOSTS, GETMYPOSTS} from '../ActionTypes/PostActionTypes'
import { GETONEPOST } from "../ActionTypes/PostActionTypes"

export const GetAllPosts =()=>async(dispatch)=>{
try {
   const res =  await axios.get('/Posts/getAllPosts')

   dispatch (
    {
        type : GETALLPOSTS ,
        payload : res.data.AllPosts
    }
   )

} catch (error) {
    console.log(error)
}
}

export const getMyPosts =()=>async(dispatch)=>{
try {

    const config = {
        headers : {
            Autorized : localStorage.getItem('token')
        }
    }

   const res =  await axios.get('/Posts/getMyPosts',config)

   dispatch (
    {
        type : GETMYPOSTS ,
        payload : res.data.myPosts
    }
   )

} catch (error) {
    console.log(error)
}
}
export const addPost=(newPostAdded, navigate)=>async(dispatch)=>{
    try {
      await axios.post('/Posts/addPost', newPostAdded)

      dispatch(GetAllPosts())
      navigate('/ListPosts')
    } catch (error) {
        console.log(error)
    }

}

export const getOnePost =(id)=>async(dispatch)=>{
try {

 const res = await axios.get(`/Posts/getOnePost/${id}`)
 dispatch (
    {
        type : GETONEPOST,
        payload : res.data.onePost
    }
 )
} catch (error) {
    console.log(error)
}
}

export const editPost=(id, upPost, navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/Posts/updatePost/${id}`, upPost)

        dispatch(GetAllPosts())

        navigate('/ListPosts')
    } catch (error) {
        console.log(error)
    }
}

export const deletePost=(id, navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/Posts/deletePost/${id}`)

        dispatch(GetAllPosts())

        navigate('/ListPosts')
        
        
    } catch (error) {
        console.log(error)
    }
}