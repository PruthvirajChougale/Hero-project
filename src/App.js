import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Navbar from './navbar.js';
import Home from './home.js';
import Heroes from './heroes.js';
import Edit from './edit.js'
function App() {
  return (
    <Router>
 <div className="App">
     <div className="navbar">
      <Navbar />
     </div>
     <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/Heroes" element={<Heroes/>}/>
    <Route path="/Edit/:id" element={<Edit/>}/>
     </Routes>
     
    </div>
    </Router>
   
  );
}

export default App;
