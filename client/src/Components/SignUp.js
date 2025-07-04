import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signup } from '../Redux/Actions/AuthAction';

const SignUp = ()=> {

  const [name, setName] = useState ('')
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate ()
  const dispatch = useDispatch ()

const handleSignUp =(e)=>{
  e.preventDefault()
  dispatch (signup({name, email, password}, navigate))

}
    return (
         <Form>

           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=> setName(e.target.value)} type="email" placeholder="Enter name" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
     
      <Button on onClick={(e)=> handleSignUp(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}

export default SignUp