import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";
import ScorePage from "./components/ScorePage";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage setUserName={setUserName} />} />
        <Route path="/quiz" element={<QuizPage userName={userName} setScore={setScore} />} />
        <Route path="/score" element={<ScorePage userName={userName} score={score} />} />
      </Routes>
    </Router>
  );
}

export default App;
