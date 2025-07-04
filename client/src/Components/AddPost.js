import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../Redux/Actions/PostAction';
import { useNavigate } from 'react-router-dom';
import { current } from '../Redux/Actions/AuthAction';
import './AddPost.css';

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.AuthReducer.user);

  const [titre, setTitre] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!titre.trim() || !description.trim()) {
      alert('Veuillez remplir le titre et la description');
      return;
    }
    dispatch(addPost({ titre, image, description, owner: user._id }, navigate));
  };

  return (
    <div className="add-post-container">
      <div className="add-post-content">
        <div className="add-post-header">
          <h2 className="add-post-title">
            <i className="fas fa-plus-circle"></i>
            Créer un nouveau post
          </h2>
          <p className="add-post-subtitle">
            Partagez vos expériences et découvertes en Tunisie
          </p>
        </div>

        <form className="add-post-form" onSubmit={handleAdd}>
          <div className="form-group">
            <label className="form-label">
              <i className="fas fa-heading"></i>
              Titre du post
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Entrez un titre accrocheur..."
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              maxLength={100}
              required
            />
            <div className="char-count">
              {titre.length}/100 caractères
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <i className="fas fa-image"></i>
              URL de l'image (optionnel)
            </label>
            <input
              type="url"
              className="form-input"
              placeholder="https://exemple.com/image.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <div className="form-hint">
              Laissez vide si vous n'avez pas d'image à ajouter
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <i className="fas fa-align-left"></i>
              Description
            </label>
            <textarea
              className="form-textarea"
              placeholder="Décrivez votre expérience, partagez vos conseils..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              maxLength={500}
              required
            />
            <div className="char-count">
              {description.length}/500 caractères
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/posts')}>
              <i className="fas fa-times"></i>
              Annuler
            </button>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Publier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;