import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editPost, getOnePost } from "../Redux/Actions/PostAction"
import { Button, Form } from "react-bootstrap"

const EditPost = ()=>{
    
    const {id} = useParams()

        const dispatch = useDispatch()


            useEffect(()=>{
            dispatch(getOnePost(id))

            },[])

      const onePost = useSelector(state =>state.PostReducer.onePost)
       
         const [titre , setTitre] = useState (onePost.titre)
        const [image , setImage] = useState (onePost.image)
        const [description, setDescription] =  useState (onePost.description)

        
         const navigate = useNavigate ()

         
        useEffect(()=>{
        setTitre(onePost.titre)
        setImage(onePost.image)
        setDescription(onePost.description)
    },[onePost])

    
          const handleEdit=(e)=>{
            e.preventDefault()
            dispatch(editPost(id,{titre,description, image}, navigate))
          }
    
    return (
          <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Titre</Form.Label>
        <Form.Control value={titre} onChange={(e)=>setTitre(e.target.value)} type="titre" placeholder="titre" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId>
        <Form.Label>Image</Form.Label>
        <Form.Control value={image} onChange={(e)=>setImage(e.target.value)} type="string" placeholder="image" />
      </Form.Group>

       <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control value = {description} onChange={(e)=>setDescription(e.target.value)} type="titre" placeholder="description" />
        
      </Form.Group>

    
      <Button onClick={(e)=> handleEdit(e)} variant="primary" type="submit">
        Edit
      </Button>
    </Form>
    )
}
export default EditPost