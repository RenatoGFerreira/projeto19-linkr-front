import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
