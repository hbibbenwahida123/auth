import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../Redux/Actions/CommentAction";
import { useEffect, useState } from "react";
import { current } from "../Redux/Actions/AuthAction";
import './Comments.css';

const CardComment = ({ el, id }) => {
  const dispatch = useDispatch();
  const [up, setUp] = useState(false);
  const [comment, setComment] = useState(el.comment);
  
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  const user = useSelector(state => state.AuthReducer.user);
  
  useEffect(() => {
    setComment(el.comment);
  }, [el]);

  const handleSave = () => {
    setUp(false);
    dispatch(editComment({ idComment: el._id, idPost: id }, { comment }));
    setComment(el.comment);
  };

  const handleDelete = () => {
    dispatch(deleteComment({ idComment: el._id, idPost: id }));
  };

  return (
    <div className="comment-card">
      <div className="comment-content">
        <div className="comment-header">
          <img
            src={el?.owner?.image || '/UserImage.png'}
            alt="Avatar"
            className="comment-avatar"
            onError={(e) => {
              e.target.src = '/UserImage.png';
            }}
          />
          <div className="comment-info">
            <div className="comment-author">{el?.owner?.name}</div>
            <div className="comment-date">
              {new Date(el.createdAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
        </div>

        {up ? (
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="comment-form-textarea"
            placeholder="Modifier votre commentaire..."
          />
        ) : (
          <div className="comment-text">{el.comment}</div>
        )}

        <div className="comment-actions">
          <div className="comment-interactions">
            <button className="comment-icon heart" title="J'aime">
              <i className="fas fa-heart"></i>
            </button>
            <button className="comment-icon" title="Répondre">
              <i className="fas fa-reply"></i>
            </button>
          </div>

          <div className="comment-buttons">
            {el?.owner?._id === user._id && (
              <>
                {up ? (
                  <button onClick={handleSave} className="comment-btn comment-btn-edit">
                    <i className="fas fa-save"></i>
                    Sauvegarder
                  </button>
                ) : (
                  <button onClick={() => setUp(true)} className="comment-btn comment-btn-edit">
                    <i className="fas fa-edit"></i>
                    Modifier
                  </button>
                )}
              </>
            )}

            {((el?.owner?._id === user._id) || (user.role === 'admin')) && (
              <button onClick={handleDelete} className="comment-btn comment-btn-delete">
                <i className="fas fa-trash"></i>
                Supprimer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComment; 