import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/main-menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
