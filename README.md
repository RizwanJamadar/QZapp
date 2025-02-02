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

First, clone the repository to your local machine by running the following command:
```bash
git clone https://github.com/yourusername/quiz-app.git
cd quiz-app

```

### 2. Install Dependencies
Make sure you have Node.js installed on your machine. Then, install the required dependencies by running:
```bash
npm install

```
This will download and install all the necessary packages to run the project.

### 3. Run the App Locally
To run the app in development mode:

```bash
npm run dev

```
After running the above command, the app will be available at http://localhost:5173. You can open this URL in your browser to interact with the quiz app.

### 4. Build the App for Production
If you are ready to deploy the app or want to create a production-ready build, you can run:

```bash
npm run build

```
This will generate an optimized version of the app in the build folder, ready for deployment to services like Netlify, Vercel, or GitHub Pages.

## How to Contribute

### 1. Fork the Repository

First, go to the GitHub repository page and click on the **Fork** button in the top-right corner to create a copy of the repository under your GitHub account.

### 2. Clone Your Fork to Your Local Machine

Once you've forked the repository, clone it to your local machine by running the following command:
```bash
git clone https://github.com/yourusername/quiz-app.git
cd quiz-app
```
### 3. Create a New Branch
Before making any changes, create a new branch to work on your feature:

```bash
git checkout -b feature-name
````
Replace feature-name with a descriptive name for the feature you're adding.

### 4. Make Your Changes and Commit Them
After making your changes to the code, add the modified files to the staging area:

```bash
git add .
```
Commit the changes with a descriptive commit message:
```bash
git commit -am 'Add new feature'
```

### 5. Push to Your Branch
Once you've committed your changes, push them to your branch on your forked repository:

```bash
git push origin feature-name
```

### 6. Create a Pull Request
Go to the repository page on GitHub, and you’ll see an option to create a Pull Request from your newly pushed branch. Click "Compare & pull request" and submit the pull request to the original repository.

Once your changes are reviewed and approved, they will be merged into the main codebase.
```bash
This will now provide clear, step-by-step Git commands for contributing to the repository in a clean and structured way.
```

