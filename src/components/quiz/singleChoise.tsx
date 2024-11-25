"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Noms } from "@/lib/types";

export default function QuizList({ nomsList }: { nomsList: Noms[] }) {
    const [score, setScore] = useState(0);
    const [numbrequiz, setNumbrequiz] = useState(0);
    const [endQuiz, setEndQuiz] = useState(false);

    const handleChoise = (val: string) => {
        console.log("Numqui  :", numbrequiz);
        if (nomsList[numbrequiz].genre == val) {
            setScore(score + 1);
        }
        if (nomsList.length <= numbrequiz + 1) {
            setEndQuiz(true);
        }
        setNumbrequiz(numbrequiz + 1);
        console.log(numbrequiz);
    };

    console.log("Inside Quile List :", nomsList);
    return (
        <div>
            <h4>
                current quiz : {numbrequiz} / {nomsList.length}
            </h4>
            <p>
                numqui : {numbrequiz}, end : {true : "true" : }
            </p>
            {endQuiz ? (
                <div>
                    <p>{nomsList[numbrequiz].lemme}</p>
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
