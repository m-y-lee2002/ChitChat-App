import Login from "./Login.js";
import MainPage from "./MainPage.js";
import Register from "./Register.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path = "/" element = {<Login/>}/>
              <Route path = "/mainpage" element = {<MainPage/>}/>
              <Route path = "/register" element = {<Register/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
