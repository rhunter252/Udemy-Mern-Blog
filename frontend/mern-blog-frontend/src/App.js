import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage/Homepage";
import Register from "./components/Users/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
