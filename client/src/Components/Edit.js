import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { current, editProfil } from "../Redux/Actions/AuthAction";
const Edit = ()=> {

     const dispatch = useDispatch()

     useEffect(()=>{
      dispatch(current())
  
     },[])
      const user = useSelector(state => state.AuthReducer.user)
    
      const [name, setName] = useState (user.name)
      const [email , setEmail] = useState(user.email)
      const [image , setImage] = useState(user.image)
        useEffect(()=>{
        setName(user.name)
        setEmail(user.email)
    },[user])

      const navigate = useNavigate()

      const handleEditProfil=(e)=>{
        e.preventDefault()
        dispatch(editProfil(user._id,{name, email, image}, navigate))
      }
    return (
        
  <Form>

           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="email" placeholder="Enter name" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control onChange={(e)=>setImage(e.target.files[0])} type="file" placeholder="Enter email" />
      </Form.Group>
     
     
      <Button onClick={(e)=>handleEditProfil(e)}  variant="primary" type="submit">
        Edit
      </Button>
    </Form>
        
    )
}

export default Edit