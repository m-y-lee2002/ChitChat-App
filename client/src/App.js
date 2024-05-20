import Login from "./components/login.js";
import MainPage from "./components/MainPage.js";
import Register from "./components/Register.js";
import CoverPage from "./components/CoverPage.js"
import LONavBar from "./components/LoggedOutNavBar.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
          <LONavBar/>
          <Routes>
              <Route path = "/" element = {<CoverPage/>}/>
              <Route path = "/login" element = {<Login/>}/>
              <Route path = "/mainpage" element = {<MainPage/>}/>
              <Route path = "/register" element = {<Register/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
