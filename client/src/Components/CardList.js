import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../Redux/Actions/AuthAction';
import './ListUsers.css';

const CardList = ({ el }) => {
  const user = useSelector(state => state.AuthReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Vérification que el existe
  if (!el) {
    return null;
  }

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      dispatch(deleteUser(el._id));
    }
  };

  const handleViewProfile = () => {
    navigate(`/profile/${el._id}`);
  };

  return (
    <div className="user-card">
      <div className="user-card-content">
        <div className="user-header">
          <div className="user-avatar-container">
            <img 
              src={el.image || '/UserImage.png'} 
              alt={el.name || 'Utilisateur'}
              className="user-avatar"
              onError={(e) => {
                e.target.src = '/UserImage.png';
              }}
            />
            <div className="user-status">
              <i className="fas fa-circle"></i>
            </div>
          </div>
          <div className="user-info">
            <h3 className="user-name">{el.name || 'Utilisateur'}</h3>
            <p className="user-email">{el.email || 'email@exemple.com'}</p>
            {el.role && (
              <span className="user-role">
                <i className="fas fa-user-tag"></i>
                {el.role}
              </span>
            )}
          </div>
        </div>

        <div className="user-details">
          <div className="user-stat">
            <i className="fas fa-calendar-alt"></i>
            <span>Membre depuis {new Date(el.createdAt || Date.now()).toLocaleDateString()}</span>
          </div>
          {el.phone && (
            <div className="user-stat">
              <i className="fas fa-phone"></i>
              <span>{el.phone}</span>
            </div>
          )}
        </div>

        <div className="user-actions">
          <button 
            onClick={handleViewProfile}
            className="user-btn user-btn-view"
          >
            <i className="fas fa-eye"></i>
            Voir profil
          </button>
          
          {user && user.role === 'admin' && el._id !== user._id && (
            <button 
              onClick={handleDelete}
              className="user-btn user-btn-delete"
            >
              <i className="fas fa-trash"></i>
              Supprimer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardList; 