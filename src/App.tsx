import { useState } from "react";
import "./App.css";

type Question = {
  prompt: string;
  corectAnswer: string;
  answers: string[];
};

const question: Question[] = [
  {
    prompt: "What color is the sky?",
    corectAnswer: "blue",
    answers: ["blue", "red", "yellow", "green"],
  },
  {
    prompt: "What is the Chemical Formula of water?",
    corectAnswer: "H2O",
    answers: ["NaCl", "H2O", "CaCO2", "C7H5N3O6"],
  },
  {
    prompt: "Who directed the movie Interselar?",
    corectAnswer: "Cristopher Nolan",
    answers: [
      "Brad Pitt",
      "Lemnaru Andrei",
      "Cristopher Nolan",
      "Quentin Tarantino",
    ],
  },
  {
    prompt: "Care-i cea mai buna bere?",
    corectAnswer: "Aia care iti place",
    answers: ["Noroc", "Aia care iti place", "Tuborg", "Guinness"],
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  console.log(selectedAnswer);

  const currentQuestion = question[currentQuestionIndex];

  const gameOver = currentQuestionIndex >= question.length;

  function Quiz() {
    return (
      <div className="page">
        <h1>{currentQuestion.prompt}</h1>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();

            if (selectedAnswer === currentQuestion.corectAnswer) {
              setScore(score + 1);
            }
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        >
          {currentQuestion.answers.map((answer) => {
            return (
              <label className="answer" key={answer}>
                <input
                  onChange={() => setSelectedAnswer(answer)}
                  type="radio"
                  name="answer"
                  checked={answer === selectedAnswer}
                ></input>
                {answer}
              </label>
            );
          })}
          <button className="submitButton">Submit</button>
        </form>
      </div>
    );
  }

  function ScoreScreen() {
    const wrongAnswers = question.length - score;

    return (
      <>
        <div>
          Your score {score}, you got{" "}
          {wrongAnswers === 1
            ? wrongAnswers + " question wrong"
            : wrongAnswers + " questions wrong"}
          .
        </div>
        <button
          className="resetButton"
          onClick={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
          }}
        >
          Reset
        </button>
      </>
    );
  }

  return <div>{gameOver ? <ScoreScreen /> : <Quiz />}</div>;
}

export default App;
