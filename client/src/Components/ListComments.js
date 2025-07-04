import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetAllCommentsByPost } from "../Redux/Actions/CommentAction"
import CardComment from "./CardComment"
import './Comments.css'

const ListComments =({id})=> {

    const dispatch = useDispatch ()



    useEffect(()=>{        
        dispatch(GetAllCommentsByPost(id))
    },[dispatch,id])
    const comments = useSelector(state => state.CommentReducer.comments)
    const loading = useSelector(state => state.CommentReducer.loading)
    const error = useSelector(state => state.CommentReducer.error)

    if (loading) {
        return (
            <div className="comments-loading">
                <div className="loading-spinner"></div>
                <p>Chargement des commentaires...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="comments-error">
                <h3>Erreur</h3>
                <p>Impossible de charger les commentaires. Veuillez réessayer.</p>
            </div>
        )
    }

    if (!comments || comments.length === 0) {
        return (
            <div className="comments-empty">
                <h3>Aucun commentaire</h3>
                <p>Soyez le premier à commenter ce post !</p>
            </div>
        )
    }

    return (
        <div className="comments-container">
            <div className="comments-header">
                <h3 className="comments-title">Commentaires</h3>
                <span className="comments-count">{comments.length}</span>
            </div>
            <div className="comments-list">
                {comments.map((el, i) => (
                    <CardComment key={el._id} el={el} id={id} />
                ))}
            </div>
        </div>
    )
}

export default ListComments 