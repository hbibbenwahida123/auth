import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CardList from "./CardList"
import { getAllContacts } from "../Redux/Actions/AuthAction"
import './ListUsers.css'
     
const ListUsers = ()=> {
  const dispatch = useDispatch()
  const users = useSelector (state => state.AuthReducer.users)
  const loading = useSelector (state => state.AuthReducer.loading)

  useEffect(()=>{
    dispatch(getAllContacts())
  },[dispatch])

    return(
      <div className="users-list-container">
        <div className="users-list-content">
          <div className="users-list-header">
            <h2 className="users-list-title">
              <i className="fas fa-users"></i>
              Liste des Utilisateurs
            </h2>
            <p className="users-list-subtitle">
              Gérez les utilisateurs de la plateforme
            </p>
          </div>

          {loading ? (
            <div className="users-loading">
              <div className="loading-spinner"></div>
              <p>Chargement des utilisateurs...</p>
            </div>
          ) : (
            <div className="users-grid">
              {users && users.length > 0 ? (
                users.map((el, i) => <CardList key={el._id} el={el} />)
              ) : (
                <div className="users-empty">
                  <i className="fas fa-user-slash"></i>
                  <h3>Aucun utilisateur trouvé</h3>
                  <p>Il n'y a actuellement aucun utilisateur dans la base de données.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
}

export default ListUsers