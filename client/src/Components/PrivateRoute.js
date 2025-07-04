import { Children } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const PrivateRoute = ({children})=> {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    return (
        <div>
{
    token ? children : <Navigate to='/'/>
}
        </div>
    )
}

export default PrivateRoute