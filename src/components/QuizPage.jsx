import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import axios from "axios";

function QuizPage({ userName, setUserName, setScore }) {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, updateScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
  }, [userName, navigate]);

  useEffect(() => {
    axios
      .get("https://quizappbackend-jwm5.onrender.com/api/quiz")
      .then((response) => {
        setQuizData(response.data);
      })
      .catch((error) => console.error("Error fetching quiz data:", error));
  }, []);

  console.log(quizData);

  const time = new Date();
  time.setSeconds(time.getSeconds() + (quizData?.duration || 300)); // Default to 5 minutes if duration is missing

  const { seconds, minutes } = useTimer({ expiryTimestamp: time, onExpire: finishQuiz });

  const handleNext = () => {
    if (!quizData) return;

    const correctOption = quizData.questions[currentQuestion].options.find(opt => opt.is_correct);

    if (selectedAnswer === correctOption?.id) {
      updateScore(score + parseInt(quizData.correct_answer_marks));
    }

    setSelectedAnswer(null);

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  function finishQuiz() {
    setScore(score);
    navigate("/score");
  }

  if (!quizData) {
    return <div className="text-white text-center mt-20">Loading quiz...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      {/* Quiz Title & Description */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold">{quizData.title}</h2>
        <p className="text-lg text-gray-300 mt-2">{quizData.topic}</p>
      </div>

      {/* Timer, Progress & Difficulty Level */}
      <div className="flex justify-between items-center w-96 mt-4">
        <h3 className="text-lg">
          Time Left: <span className="font-semibold text-yellow-400">{minutes}:{seconds < 10 ? "0" : ""}{seconds}</span>
        </h3>
        <p className="text-sm bg-gray-700 px-3 py-1 rounded-full">
          Questions: <span className="font-bold text-blue-400">{currentQuestion + 1}/10</span>
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-96 bg-gray-700 rounded-full h-2 mt-2">
        <div
          className="bg-yellow-400 h-2 rounded-full"
          style={{ width: `${((currentQuestion) / quizData.questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question & Options */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6 w-96">
        <h3 className="text-xl">{quizData.questions[currentQuestion].description}</h3>
        {quizData.questions[currentQuestion].options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedAnswer(option.id)}
            className={`w-full mt-3 p-2 rounded-lg text-lg transition ${
              selectedAnswer === option.id
                ? "bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {option.description}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuizPage;
