import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current, deleteProfil } from "../Redux/Actions/AuthAction"
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ListMyPosts from "./ListMyPosts";
import "./Profil.css";

        const Profil = ()=> {



        const dispatch = useDispatch()


        useEffect(()=>{
        dispatch(current())  
        },[])

        const user = useSelector(state => state.AuthReducer.user)

        const navigate = useNavigate()

        const handleDelete = ()=> {
            dispatch(deleteProfil(user._id, navigate))
           
        }

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    return (
      <div className="profile-container">
        <div className="profile-content">
          <img 
            src={user.image} 
            alt="Profile" 
            className="profile-image"
            onError={(e) => {
              e.target.src = '/UserImage.png';
            }}
          />
          
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <h3 className="profile-email">{user.email}</h3>
          </div>

          <div className="profile-actions">
            <Button 
              as={Link} 
              to='/Edit' 
              className="profile-btn profile-btn-edit"
            >
              Edit Profile
            </Button>
            
            <Button 
              variant="danger" 
              onClick={handleShow}
              className="profile-btn profile-btn-delete"
            >
              Delete Account
            </Button>
          </div>

          <div className="profile-posts-section">
            <h3 className="profile-posts-title">My Posts</h3>
            <ListMyPosts/>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete Account
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default Profil