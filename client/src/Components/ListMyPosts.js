import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {   getMyPosts } from "../Redux/Actions/PostAction"

import CardMyPost from "./CardMyPost"
const ListMyPosts =()=> {

    const dispatch = useDispatch ()

    useEffect(()=>{
        dispatch(getMyPosts())
        

    },[])
    const myPosts = useSelector(state => state.PostReducer.myPosts)
    return (
        <div>
            {
                myPosts.map((el,i,t)=><CardMyPost el={el}/>)
            }

        </div>
    )
}

export default ListMyPosts 