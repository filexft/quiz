// "use client";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// export default function Gender() {
//     const wordUsageFrequency = [
//         "uf",
//         "vf",
//         "fu",
//         "ou",
//         "ru",
//         "vru",
//         "er",
//     ] as const;
//     const [freq, setFreq] = useState<(typeof wordUsageFrequency)[number]>("fu");
//     const [quizList, setQuizList] = useState([]);
//     const getNewQuizSet = async () => {
//         try {
//             const res = await fetch("/api/gender/random", {
//                 method: "POST",
//                 body: JSON.stringify({
//                     freq: "vf",
//                 }),
//             });
//             const data = await res.json();
//             setQuizList(data);

//             console.log("Quiz list -----:", quizList);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     const [data, setData] = useState({ data: [] });
//     const [isLoading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("/api/gender/random", {
//             method: "POST",
//             body: JSON.stringify({
//                 freq: "vf",
//             }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 setData(data);
//                 setLoading(false);
//                 console.log(data);
//             });
//     }, []);

//     const [gendre, setGendre] = useState("");
//     let fisrtdata = data && data.data ? data.data : [];
//     return (
//         <div>
//             <div>
//                 <Button
//                     onClick={getNewQuizSet}
//                     className="bg-blue-500 hover:bg-blue-700"
//                 >
//                     New Quiz Set
//                 </Button>
//             </div>
//             {fisrtdata ? (
//                 <div>
//                     <h2>{fisrtdata[0] ? fisrtdata[0]["lemme"] : "non"}</h2>
//                     <div className="flex gap-x-6 bg-slate-50">
//                         <Button onClick={() => setGendre("m")}>
//                             Masculine
//                         </Button>
//                         <Button onClick={() => setGendre("m")}>Féminin</Button>
//                     </div>
//                 </div>
//             ) : (
//                 <p>no quiz</p>
//             )}
//         </div>
//     );
// }

// /**
//  *  <Button className="bg-blue-500 hover:bg-blue-700">
//                     Masculine
//                 </Button>
//                 <Button className="bg-red-500 hover:bg-red-700">Féminin</Button>
//  */
