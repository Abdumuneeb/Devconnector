import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Landing from './Components/Layout/Landing';
import {BrowserRouter ,Route} from 'react-router-dom' ;
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';



function App() {
  return (
    <BrowserRouter> 
   <div className="App">
    <Navbar/>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    <Footer/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
