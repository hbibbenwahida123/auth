import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './CardPost.css';

const CardPost = ({el})=> {
    // Vérification que el existe
    if (!el) {
        return null;
    }

    return (
      <Card className="post-card">
        <div className="post-header">
          <img 
            src={el.owner?.image || '/UserImage.png'} 
            alt={el.owner?.name || 'Utilisateur'}
            className="post-owner-avatar"
            onError={(e) => {
              e.target.src = '/UserImage.png';
            }}
          />
          <h3 className="post-owner-name">{el.owner?.name || 'Utilisateur'}</h3>
        </div>
        
        <div className="post-image-container">
          <Link to={`/PostDescription/${el._id}`}>
            <img 
              src={el.image || '/UserImage.png'} 
              alt={el.titre || 'Image du post'}
              className="post-image"
              onError={(e) => {
                e.target.src = '/UserImage.png';
              }}
            />
          </Link>
        </div>
        
        <div className="post-body">
          <h4 className="post-title">{el.titre || 'Sans titre'}</h4>
          
          <div className="post-actions">
            <div className="post-interactions">
              <div className="post-icon comment">
                <FontAwesomeIcon icon={faComment} />
              </div>
              <div className="post-icon heart">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            
            <div className="post-actions-buttons">
              {/* <Link to={`/EditPost/${el._id}`} className="post-btn post-btn-edit">
                Edit
              </Link> */}
              {/* <DeletePost el={el} className="post-btn post-btn-delete" /> */}
            </div>
          </div>
        </div>
      </Card>
    )
}

export default CardPost