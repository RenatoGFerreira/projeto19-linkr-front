import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SIgnupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import TimeLinePage from "./pages/TimeLinePage/TImeLine";
import HashtagPage from "./pages/HashtagPage/HashtagPage"
import AuthProvider from "./contexts/AuthContext";
import UserPage from "./pages/UserPage/UserPage";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/timeline" element={<TimeLinePage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/hashtag" element={<HashtagPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
