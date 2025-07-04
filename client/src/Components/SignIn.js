import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../Redux/Actions/AuthAction';
const SignIn= ()=> {
    const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate ()
  const dispatch = useDispatch ()
  const handleSignIn = (e)=> {
    e.preventDefault()
    dispatch(signin({email,password}, navigate))
  }
    return (
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=> setPassword(e.target.value)}  type="password" placeholder="Password" />
      </Form.Group>
    
      <Button onClick={(e)=>handleSignIn(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}

export default SignIn