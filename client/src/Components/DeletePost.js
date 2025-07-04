import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux'
import { deletePost } from '../Redux/Actions/PostAction';
import { useNavigate } from 'react-router-dom';

const DeletePost=({onePost})=>{

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const dispatch = useDispatch()

        const navigate = useNavigate()

    return(
          <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="danger" onClick={()=>{dispatch(deletePost(onePost._id,navigate)); handleClose()}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default DeletePost