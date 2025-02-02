import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";

const quizTitle = "General Knowledge Quiz";
const quizDescription =
  "Test your knowledge across various subjects including history, science, and geography.";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
    difficulty: "Easy",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
    difficulty: "Easy",
  },
  {
    id: 3,
    question: "Who wrote 'Hamlet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Leo Tolstoy",
    ],
    correctAnswer: "William Shakespeare",
    difficulty: "Medium",
  },
  {
    id: 4,
    question: "What is the chemical symbol for Gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    correctAnswer: "Au",
    difficulty: "Medium",
  },
  {
    id: 5,
    question: "Which year did World War II end?",
    options: ["1943", "1945", "1950", "1939"],
    correctAnswer: "1945",
    difficulty: "Hard",
  },
  {
    id: 6,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
    difficulty: "Easy",
  },
  {
    id: 7,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
    difficulty: "Medium",
  },
  {
    id: 8,
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
    difficulty: "Medium",
  },
  {
    id: 9,
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "14"],
    correctAnswer: "12",
    difficulty: "Easy",
  },
  {
    id: 10,
    question: "Which element has the highest melting point?",
    options: ["Iron", "Tungsten", "Gold", "Platinum"],
    correctAnswer: "Tungsten",
    difficulty: "Hard",
  },
];

function QuizPage({ userName, setUserName, setScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, updateScore] = useState(0);
  const navigate = useNavigate();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 minutes timer

  const { seconds, minutes, isRunning } = useTimer({ expiryTimestamp: time, onExpire: finishQuiz });

  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
  }, [userName, navigate]);

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      updateScore(score + 4);
    }
    setSelectedAnswer("");

    if (currentQuestion < questions.length - 1) {
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

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      {/* Quiz Title & Description */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold">{quizTitle}</h2>
        <p className="text-lg text-gray-300 mt-2">{quizDescription}</p>
      </div>

      {/* Timer, Progress & Difficulty Level */}
      <div className="flex justify-between items-center w-96 mt-4">
        <h3 className="text-lg">
          Time Left: <span className="font-semibold text-yellow-400">{minutes}:{seconds < 10 ? "0" : ""}{seconds}</span>
        </h3>
        <p className="text-sm bg-gray-700 px-3 py-1 rounded-full">
          Difficulty: <span className="font-bold text-blue-400">{questions[currentQuestion].difficulty}</span>
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-96 bg-gray-700 rounded-full h-2 mt-2">
        <div
          className="bg-yellow-400 h-2 rounded-full"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question & Options */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6 w-96">
        <h3 className="text-xl">{questions[currentQuestion].question}</h3>
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedAnswer(option)}
            className={`w-full mt-3 p-2 rounded-lg text-lg transition ${
              selectedAnswer === option
                ? "bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {option}
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
          disabled={!selectedAnswer}
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuizPage;