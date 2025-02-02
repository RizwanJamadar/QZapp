import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Howl } from "howler"; // Import Howler
import { runFireworks } from "../utils/runFireworks";

function ScorePage({ userName, setUserName, score }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
    runFireworks(); // Trigger fireworks animation
    playSound("/sounds/quiz-end.mp3"); // Play sound when quiz ends
  }, [userName, navigate]);

  // Define badge levels with description
  const BADGES = [
    { name: "Beginner", minScore: 0, maxScore: 40, icon: "🏁", desc: "Just getting started! Keep learning." },
    { name: "Learner", minScore: 41, maxScore: 60, icon: "📚", desc: "Decent effort! You're improving." },
    { name: "Achiever", minScore: 61, maxScore: 80, icon: "🎯", desc: "Great job! You know your stuff." },
    { name: "Expert", minScore: 81, maxScore: 99, icon: "🏆", desc: "Almost perfect! True mastery." },
    { name: "Genius", minScore: 100, icon: "🌟", desc: "Perfect score! You are unstoppable." },
  ];

  // Calculate the percentage and find the appropriate badge
  const totalMarks = 40;
  const percentage = (score / totalMarks) * 100;
  const earnedBadge = BADGES.find(
    (badge) => percentage >= badge.minScore && percentage <= badge.maxScore
  );

  // Play sound using Howler.js
  const playSound = (soundFile) => {
    const sound = new Howl({
      src: [soundFile], // Path to your sound file
      volume: 0.5, // Adjust volume if needed
    });
    sound.play();
  };

  // Play sound when the user earns a badge
  useEffect(() => {
    if (earnedBadge) {
      playSound("/sounds/badge-unlock.mp3"); // Play sound when badge is earned
    }
  }, [earnedBadge]);

  // Restart Quiz function
  const restartQuiz = () => {
    navigate("/");
    setUserName(""); // Reset username for the new quiz attempt
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white border-2 border-gray-500 shadow-lg p-6 rounded-lg animate-fade-in">
      <h1 className="text-[28px] text-center md:text-5xl font-extrabold mb-6 text-gray-100 animate__animated animate__fadeInDown">
        🎉 Quiz Completed! 🎉
      </h1>

      <h2 className="text-2xl mb-2">
        Well done, <span className="font-semibold text-gray-300">{userName}</span>!
      </h2>
      <h3 className="text-2xl mt-2">
        Your Score: <span className="font-bold text-gray-400">{score}/40</span>
      </h3>
      <h3 className="text-2xl mt-2">
        Percentage: <span className="font-bold text-gray-300">{percentage.toFixed(2)}%</span>
      </h3>

      {/* Display Badge if earned */}
      {earnedBadge && (
        <div className="mt-6 flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-bold text-gray-200">
            🏅 {earnedBadge.icon} {earnedBadge.name}!
          </h3>
          <p className="text-gray-400 italic text-lg">{earnedBadge.desc}</p>
        </div>
      )}

      {/* Restart Button with smooth hover effect */}
      <button
        onClick={restartQuiz}
        className="mt-6 px-8 py-3 bg-gray-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-500 hover:scale-105 transform transition duration-300"
      >
        🔄 Restart Quiz
      </button>
    </div>
  );
}

export default ScorePage;
