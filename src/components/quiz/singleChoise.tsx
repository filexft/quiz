"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Noms } from "@/lib/types";

export default function QuizList({
    nomsList,
    restartQuiz,
}: {
    nomsList: Noms[];
    restartQuiz: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [score, setScore] = useState(0);
    const [numbrequiz, setNumbrequiz] = useState(0);
    const [endQuiz, setEndQuiz] = useState(false);

    const handleChoise = (val: string) => {
        if (nomsList[numbrequiz].genre == val) {
            setScore(score + 1);
        }
        if (nomsList.length <= numbrequiz + 1) {
            setEndQuiz(true);
        }
        setNumbrequiz(numbrequiz + 1);
        console.log(numbrequiz);
    };

    const restartGame = () => {
        setEndQuiz(false);
        setNumbrequiz(0);
        setScore(0);
        restartQuiz(true);
    };

    return (
        <div className="flex flex-col gap-3  my-5">
            <h4>
                current quiz : {numbrequiz} / {nomsList.length}
            </h4>
            <Button className="bg-green-400" onClick={restartGame}>
                Restart
            </Button>
            <p></p>
            {!endQuiz ? (
                <div>
                    <h4>
                        You score : {score} / {nomsList.length}
                    </h4>
                    <p className="text-5xl text-center my-3">
                        {nomsList[numbrequiz].lemme}
                    </p>
                    <div className="flex gap-3">
                        <Button
                            onClick={() => handleChoise("m")}
                            className="bg-blue-400 hover:bg-blue-700"
                        >
                            Masculine
                        </Button>
                        <Button
                            onClick={() => handleChoise("f")}
                            className="bg-pink-400 hover:bg-pink-700"
                        >
                            Féminin
                        </Button>
                    </div>
                </div>
            ) : (
                <h3>
                    You Got {score} / {nomsList.length} !!!!
                </h3>
            )}
        </div>
    );
}
