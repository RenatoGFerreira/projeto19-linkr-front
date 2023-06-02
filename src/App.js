import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SIgnupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import TimeLinePage from "./pages/TimeLinePage/TImeLine";
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  const [auth, setAuth] = useState({});

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/timeline" element={<TimeLinePage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
