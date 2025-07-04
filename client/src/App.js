import NavAuth from './Components/NavAuth'
import Home from './Components/Home'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Profil from './Components/Profil'
import PrivateRoute from './Components/PrivateRoute';
import Error from './Components/Error';
import Edit from './Components/Edit'
import ListUsers from './Components/ListUsers';
import ListPosts from './Components/ListPosts';
import PostDescription from './Components/PostDescription';
import AddPost from './Components/AddPost';
import EditPost from './Components/EditPost';

// import ListData from './Components/ListData';
function App() {
  return (
    <div>
  <NavAuth/>
<Error/>
  <Routes>
    <Route path='/' element = {<Home/>} />
    
    <Route path='/PostDescription/:id' element = {<PostDescription/>}/>
    <Route path='/ListUsers' element ={<ListUsers/>}/>
    <Route path='/SignIn' element = {<SignIn/>} />
    <Route path='/SignUp' element = {<SignUp/>} />
    <Route path='/Edit' element = {<Edit/>} />
    <Route path='/ListPosts' element ={<ListPosts/>} />
    <Route path='/Profil' element = {<PrivateRoute> <Profil/></PrivateRoute>} /> 
    <Route path='/AddPost' element = {<AddPost/>}/> 
    <Route path='/EditPost/:id' element={<EditPost/>} />
  </Routes>
   </div> 
  );
}

export default App;
