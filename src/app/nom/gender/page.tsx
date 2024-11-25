"use client";
import { use, useEffect, useState } from "react";
import { Noms } from "@/lib/types";
import { Button } from "@/components/ui/button";
import QuizList from "@/components/quiz/singleChoise";

interface responseData {
    count: number;
    data: Noms[];
}

export default function Gender() {
    const [resData, setResData] = useState<responseData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null | unknown>(null);
    const [fetchReq, setFetchReq] = useState<boolean>(false);

    useEffect(() => {
        if (fetchReq) {
            const getNewQuizSet = async () => {
                setIsLoading(true);
                setError(null);
                try {
                    const res = await fetch("/api/gender/random", {
                        method: "POST",
                        body: JSON.stringify({
                            freq: "vf",
                        }),
                    });
                    if (!res.ok) {
                        throw new Error("Failed to get new Quiz Set ");
                    }
                    const data = await res.json();
                    setResData(data);

                    console.log("Quiz list -----:", resData);
                } catch (err) {
                    console.log(err);
                    setError(err);
                } finally {
                    setIsLoading(false);
                }
            };
            getNewQuizSet();
            setFetchReq(false);
        }
    }, [fetchReq, resData]);

    return (
        <div>
            <div>
                <Button
                    onClick={() => setFetchReq(true)}
                    className="bg-blue-500 hover:bg-blue-700"
                >
                    New Quiz Set
                </Button>
            </div>
            {resData && resData.data ? (
                <QuizList nomsList={resData.data} />
            ) : (
                <p>no quiz</p>
            )}
        </div>
    );
}

/**
 *   const wordUsageFrequency = [
        "uf",
        "vf",
        "fu",
        "ou",
        "ru",
        "vru",
        "er",
    ] as const;

    const [freq, setFreq] = useState<(typeof wordUsageFrequency)[number]>("fu");

     <div>
                    <h2>{"tt"}</h2>
                    <div className="flex gap-x-6 bg-slate-50">
                        <Button onClick={() => setGendre("m")}>
                            Masculine
                        </Button>
                        <Button onClick={() => setGendre("m")}>Féminin</Button>
                    </div>
                </div>
 */
