import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SIgnupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import TimeLinePage from "./pages/TimeLinePage/TImeLine";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/timeline" element={<TimeLinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
