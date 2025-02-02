import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage({ setUserName }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const startQuiz = () => {
    if (name.trim() !== "") {
      setUserName(name);
      navigate("/quiz");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white px-6">
      <h1 className="text-[28px] text-center md:text-5xl font-bold mb-6 text-gray-100">🎓 Welcome to QZapp!</h1>

      {/* 📌 Quiz Instructions */}
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-3 text-gray-300">Quiz Instructions</h2>
        <ul className="list-disc list-inside text-lg space-y-2 text-gray-400">
          <li>📌 The quiz consists of <span className="font-bold text-gray-300">10 questions</span>.</li>
          <li>📌 Each correct answer gives <span className="font-bold text-gray-300">4 marks</span>.</li>
          <li>📌 You must select an answer to proceed to the next question.</li>
          <li>📌 Time allocated per question: <span className="font-bold text-gray-300">30 seconds</span>.</li>
          <li>📌 Total quiz time: <span className="font-bold text-gray-300">5 minutes</span>.</li>
          <li>📌 No negative marking for incorrect answers.</li>
          <li>📌 You can navigate between questions using <span className="font-bold text-gray-300">Prev & Next</span> buttons.</li>
        </ul>
      </div>

      {/* 📌 Name Input */}
      <div className="mt-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg text-lg text-black outline-none border-2 border-gray-500 focus:border-gray-400 bg-gray-300"
        />
        <button
          onClick={startQuiz}
          disabled={!name.trim()}
          className="w-full mt-4 px-6 py-3 bg-gray-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-500 hover:scale-105 transform transition duration-300 disabled:text-gray-50"
        >
          🚀 Take a Quiz
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
