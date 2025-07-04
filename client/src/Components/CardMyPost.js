import Card from 'react-bootstrap/Card';
import { Link, Links } from 'react-router-dom';
const CardMyPost = ({el})=> {
    return (
       <Card style={{ width: '18rem' }}>
        <Link to={`/PostDescription/${el._id}`} >
      <Card.Img variant="top" src={el.image} />
      </Link>
      <Card.Body>
        <Card.Title>{el.titre}</Card.Title>
       {/* <Card.Link as={Link} to={`/EditPost/${el._id}`} >Edit</Card.Link> */}
        {/* <Button variant="danger">Delete</Button> */}
        {/* <DeletePost el={el}/> */}
      </Card.Body>
    </Card>
    )
}

export default CardMyPost