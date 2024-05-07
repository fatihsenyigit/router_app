
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Home from './page/Home';
import AboutInfo from './components/AboutInfo';
import PrivateRouter from './page/PrivateRouter';
import Logout from './components/Logout';
import { useState } from "react";
import NotFound from './components/NotFound'
function App() {
  const [user, setUser] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PrivateRouter user={user} />}></Route>
          <Route path="/home" element={<Home></Home>}>
            <Route path="about" element={<AboutInfo></AboutInfo>} />
            <Route path="logout" element={<Logout></Logout>}></Route>
          </Route>
          <Route
            path="/login"
            element={<LoginForm setUser={setUser}></LoginForm>}
          />

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
