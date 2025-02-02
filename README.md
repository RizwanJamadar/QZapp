# Quiz App with Gamification

A web-based interactive quiz application built with **React**, featuring **gamification** elements such as badges, sound effects, and animations. Users can take a quiz, earn badges based on their performance, and enjoy sound effects and visual animations throughout the experience.

## Features
- **Interactive Quiz**: Multiple-choice questions with a total score of **40 marks**.
- **Badge System**: Users earn badges based on their score percentage.
  - **Beginner**: 0-40%
  - **Learner**: 41-60%
  - **Achiever**: 61-80%
  - **Expert**: 81-99%
  - **Genius**: 100%
- **Sound Effects**: Engaging sounds play when the quiz is completed or a badge is earned, powered by **Howler.js**.
- **Fireworks Animation**: Triggered upon quiz completion to celebrate the user's performance.
- **Responsive Design**: Optimized for both mobile and desktop viewports using **Tailwind CSS**.

## Technologies Used
- **Frontend**: 
  - **React**: For building the interactive UI.
  - **Tailwind CSS**: For styling the application with utility-first CSS.
  - **Howler.js**: For handling audio playback of sound effects.
  - **React Router**: For managing page navigation.
  - **Fireworks Animation**: Custom fireworks animation triggered on quiz completion.

## App Flow

### 1. **Starting the Quiz**
   - The user enters their name and starts the quiz by clicking the "Start Quiz" button.
   - The quiz contains **10 questions**, each worth **4 marks**. The total score is out of **40**.

### 2. **Answering Questions**
   - The user answers each question, and their answers are automatically stored.
   - The app transitions to the next question as soon as the user selects an answer.

### 3. **Quiz Completion**
   - After all questions are answered, the user is shown a results page:
     - **Total Score** (out of 40).
     - **Percentage**.
     - **Badge earned** based on their score.

### 4. **Badge System**
   - **Beginner**: 0-40% (🏁)
   - **Learner**: 41-60% (📚)
   - **Achiever**: 61-80% (🎯)
   - **Expert**: 81-99% (🏆)
   - **Genius**: 100% (🌟)
   - Users are congratulated and awarded a badge according to their percentage.

### 5. **Sound Effects**
   - A **quiz-end sound** is played when the quiz finishes.
   - A **badge-unlock sound** is triggered when a user earns a badge.

### 6. **Restarting the Quiz**
   - The user can restart the quiz by clicking the "Restart Quiz" button, which resets their score and allows them to try again.

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/quiz-app.git
cd quiz-app
