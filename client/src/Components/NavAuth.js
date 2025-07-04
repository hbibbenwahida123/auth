import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Actions/AuthAction';
import './NavAuth.css';

const NavAuth = () => {
  const token = localStorage.getItem('token')
  const user = useSelector(state => state.AuthReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="nav-auth-container">
      <div className="nav-auth-content">
        <Link to="/" className="nav-auth-brand">
          <span className="nav-auth-logo">SocialApp</span>
        </Link>

        <ul className="nav-auth-menu">
          <li>
            <Link to="/" className="nav-auth-link">
              Accueil
            </Link>
          </li>

          {user && token ? (
            <>
              <li>
                <Link to="/Profil" className="nav-auth-link">
                  Profil
                </Link>
              </li>
              <li>
                <Link to="/ListPosts" className="nav-auth-link">
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/AddPost" className="nav-auth-link">
                  Ajouter Post
                </Link>
              </li>
              {user.role === "admin" && (
                <li>
                  <Link to="/ListUsers" className="nav-auth-link">
                    Utilisateurs
                  </Link>
                </li>
              )}
            </>
          ) : (
            <div className="nav-auth-auth-buttons">
              <Link to="/SignUp" className="nav-auth-signup">
                Inscription
              </Link>
              <Link to="/SignIn" className="nav-auth-signin">
                Connexion
              </Link>
            </div>
          )}
        </ul>

        {user && token && (
          <div className="nav-auth-user">
            <img
              src={user.image || '/UserImage.png'}
              alt="Avatar"
              className="nav-auth-avatar"
            />
            <span className="nav-auth-username">{user.name}</span>
            <button onClick={handleLogout} className="nav-auth-logout">
              Déconnexion
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavAuth;