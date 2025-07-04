import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {  GetAllPosts } from "../Redux/Actions/PostAction"
import CardPost from "./CardPost"
import './ListPosts.css'
const ListPosts =()=> {

    const dispatch = useDispatch ()

    useEffect(()=>{
        dispatch(GetAllPosts())
        

    },[])
    const posts = useSelector(state => state.PostReducer.posts)
    return (
        <div className="posts-list-container">
            <div className="posts-list-content">
                <h2 className="posts-list-title">Tous les Posts</h2>
                <div className="posts-grid">
                    {posts && posts.length > 0 ? (
                        posts.map((el, i) => <CardPost key={el._id} el={el} />)
                    ) : (
                        <div className="posts-empty">
                            Aucun post trouvé
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListPosts 