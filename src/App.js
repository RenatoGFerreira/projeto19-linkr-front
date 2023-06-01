import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SIgnupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import TimeLinePage from "./pages/TimeLinePage/TImeLine";
import HashtagPage from "./pages/HashtagPage/HashtagPage"
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const [auth, setAuth] = useState({});

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{auth, setAuth}}>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/timeline" element={<TimeLinePage />} />
          <Route path="/hashtag" element={<HashtagPage />} />

        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
