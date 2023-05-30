import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SIgnupPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
