// import { header } from "express-validator"
import { CURRENT, DELETE, FAIL, GETALLCONTACTS, LOGOUT, SIGNIN, SIGNUP } from "../ActionTypes/AuthActionTypes"
import axios from 'axios'
import { HandleError } from "./ErrorAction"
export const signup =(regUser, navigate)=> async (dispatch)=>{
try {
   const res = await axios.post('/auth/SignUp', regUser)

   dispatch (
    {
        type : SIGNUP ,
        payload : res.data
    }
   )
navigate ('/Profil')

} catch (error) {
    // dispatch (
    //     {
    //         type : FAIL ,
    //         payload : error.response.data.errors
    //     }
    // )
       error.response.data.errors.forEach(element => {
        dispatch(HandleError(element.msg))
    });
}
}

export const signin = (coredUser, navigate)=> async(dispatch)=>{
try {
    const res = await axios.post('/auth/SignIn', coredUser)
    dispatch (
        {
            type : SIGNIN,
            payload : res.data
        }
    )
    navigate('/Profil')


} catch (error) {
    // dispatch (
    //     {
    //         type : FAIL,
    //         payload : error.response.data.errors
    //     }
    // )
    error.response.data.errors.forEach(element => {
        dispatch(HandleError(element.msg))
    });
}
}

export const current = ()=>async (dispatch)=> {
try {
    const config = {
        headers : {
            Autorized : localStorage.getItem('token')
        }
    }

 const res = await  axios.get('/auth/CurrentUser', config)
 dispatch(
    {
        type : CURRENT ,
        payload : res.data
    }
 )
} catch (error) {
    dispatch(
        {
            type : FAIL ,
            payload : error.response.data.errors    
        }
    )
    
}
}

export const logout = ()=>{
    return (
        {
            type : LOGOUT
        }
    )
}

export const editProfil=(id, upProfil, navigate)=>async(dispatch)=>{
    try {
        console.log(upProfil)
        const formData = new FormData();
        formData.append('image', upProfil.image);
        console.log(formData)
        const res =  await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=6a6b74d450902bc0e4b380f36a452b91',formData)


         await axios.put(`/auth/UpDate/${id}`, {...upProfil,image : res.data.data.url})

        dispatch(current())

        navigate('/Profil')
    } catch (error) {
        console.log(error)
    }
}

export const deleteProfil=(id, navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/auth/Delete/${id}`)

        dispatch(logout())

        navigate('/')
        
        
    } catch (error) {
        console.log(error)
    }
}

export const getAllContacts =()=> async (dispatch)=>{
    try {
         const res = await axios.get('/auth/getAllContacts') 
         dispatch (
            {
                type : GETALLCONTACTS,
                payload : res.data.Users
            }
         )

    } catch (error) {
         console.log(error)
    }
}

export const deleteUser =(id)=> async(dispatch)=> {
    try {
        await axios.delete(`/auth/Delete/${id}`)
        dispatch (getAllContacts())
       
        
    } catch (error) {
        console.log(error)
    }
}