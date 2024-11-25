"use client";
import { useEffect, useState } from "react";
import { Noms } from "@/lib/types";
import { Button } from "@/components/ui/button";
import QuizList from "@/components/quiz/singleChoise";

interface responseData {
    count: number;
    data: Noms[];
}

export default function Gender() {
    return <h3>Gender</h3>;
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
