import { useState } from "react";

import Card from "../../components/Card";
const Quiz = () => {
  const questions = [
    {
      questionText:
        "Urutan planet yang terdekat dengan pusat Tata Surya adalah ...",
      answerOptions: [
        {
          answerText:
            "Merkurius, Venus, Bumi, Mars, Saturnus, Jupiter, Uranus, Neptunus",
          isCorrect: false,
        },
        {
          answerText:
            "Merkurius, Venus, Bumi, Mars Jupiter, Saturnus, Uranus, Neptunus",
          isCorrect: true,
        },
        {
          answerText:
            "Bumi, Venus, Merkurius, Mars Jupiter, Saturnus, Uranus, Neptunus",
          isCorrect: false,
        },
        {
          answerText:
            "Mars, Merkurius, Venus, Bumi, Saturnus, Jupiter, Uranus, Neptunus",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Garis edar planet dinamakan ...",
      answerOptions: [
        { answerText: "Orbit", isCorrect: true },
        { answerText: "Asteroid", isCorrect: false },
        { answerText: "Meteroid", isCorrect: false },
        { answerText: "Planetoid", isCorrect: false },
      ],
    },
    {
      questionText:
        "Berikut merupakan planet yang terjauh dari pusat Tata Surya adalah ...",
      answerOptions: [
        { answerText: "Bumi", isCorrect: false },
        { answerText: "Uranus", isCorrect: false },
        { answerText: "Pluto", isCorrect: false },
        { answerText: "Neptunus", isCorrect: true },
      ],
    },
    {
      questionText: "Arah ekor komet ...",
      answerOptions: [
        { answerText: "Sejajar Matahari", isCorrect: false },
        { answerText: "Menjauhi Matahari", isCorrect: true },
        { answerText: "Tegak Lurus Matahari", isCorrect: false },
        { answerText: "Mendekati Matahari", isCorrect: false },
      ],
    },
    {
      questionText: "Mars adalah planet terdekat dengan matahari",
      answerOptions: [
        { answerText: "Salah", isCorrect: true },
        { answerText: "Benar", isCorrect: false },
      ],
    },
    {
      questionText:
        "Yang termasuk dalam planet superior adalah Jupiter, Saturnus, Uranus, dan Neptunus.",
      answerOptions: [
        { answerText: "Benar", isCorrect: true },
        { answerText: "Salah", isCorrect: false },
      ],
    },
    {
      questionText: "Planet yang paling dingin di tata surya adalah ?",
      answerOptions: [
        { answerText: "Uranus", isCorrect: false },
        { answerText: "Jupiter", isCorrect: false },
        { answerText: "Neptunus", isCorrect: true },
        { answerText: "Merkurius", isCorrect: false },
      ],
    },
    {
      questionText: "Planet yang memilki bintang fajar adalah ?",
      answerOptions: [
        { answerText: "Merkurius", isCorrect: false },
        { answerText: "Venus", isCorrect: true },
        { answerText: "Bumi", isCorrect: false },
        { answerText: "Saturnus", isCorrect: false },
      ],
    },
    {
      questionText: "Berapakah planet yang ada di tata surya kita ?",
      answerOptions: [
        { answerText: "13", isCorrect: false },
        { answerText: "8", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "9", isCorrect: false },
      ],
    },
    {
      questionText:
        "Kumpulan dari matahari, planet dan benda langit lainnya disebut ....",
      answerOptions: [
        { answerText: "Galaksi", isCorrect: false },
        { answerText: "Bima sakti", isCorrect: false },
        { answerText: "Tata surya", isCorrect: true },
        { answerText: "Satelit", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="w-full h-screen dark:text-white text-black pt-10 flex justify-center ">
      <Card>
        <div className="w-full h-screen dark:text-white text-black  flex flex-row items-center justify-center">
          {showScore ? (
            <div className="flex w-full h-full flex-row justify-center items-center">
              <h1 className="font-bold text-xl text-center flex flex-row justify-center items-center ">
                Nilai kamu {score} dari {questions.length}
              </h1>
            </div>
          ) : (
            <>
              <div className="w-1/2 text-center flex flex-col gap-y-5">
                <h1 className="font-bold text-xl">
                  Pertanyaan {currentQuestion + 1}{" "}
                  <span>/{questions.length}</span>
                </h1>
                <h1>{questions[currentQuestion].questionText}</h1>
              </div>
              <div className="w-1/2 text-center flex flex-col">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Quiz;
