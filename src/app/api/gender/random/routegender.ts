// import prisma from "@/lib/db";

// export async function POST(request: Request) {
//     try{

//     //     const wordUsageFrequency = {
//     //         uf: 100, //  Ultra Frequent frq > than 100:   = 248  counts
//     //         vf: 50, // Very Frequent     = 538
//     //         fu: 30, // Frequently Used   = 843
//     //         ou: 15, // Occasionally Used   = 1474
//     //         ru: 7, // Rarely Used        = 2515
//     //         vru: 3, // Very Rarely Used  = 4153
//     //         er: 0.1, // Extremely Rare   = 8037
//     //     };
        
//     //     const req = await request.json();
//     //     const freq: string | undefined = req?.freq;
        
//     //     const quizNum =
//     //     req?.quizNum && [10, 20, 30].includes(req?.quizNum) ? req?.quizNum : 10;
        
//     //     let wordFreq =
//     //     freq && freq in wordUsageFrequency
//     //     ? wordUsageFrequency[freq as keyof typeof wordUsageFrequency] // Ensure type assertion here
//     //     : null;
        
//     //     if (!wordFreq) {
//     //         wordFreq = 30; // fu
//     //     }
        
//     //     const wordsCount = await prisma.noms.count({
//     //         where: {
//     //             freqlemfilms2: { gt: wordFreq! },
//     //         },
//     //     });
        
//     //     const skip = Math.floor(Math.random() * wordsCount);
//     //     console.log(wordFreq, " ---- ", wordsCount, " ---- ", skip);
//     //     const data = await prisma.noms.findMany({
//     //         where: {
//     //             freqlemfilms2: { gt: wordFreq! },
//     //         },
//     //         skip: skip,
//     //         take: quizNum,
//     //     });
//     //     if (data) {
//     //         return Response.json({ count: quizNum, data });
//     //     }
//     //     return Response.json({ message: "data" });
//     // }catch(err){
//     //     console.log(err)
//     //     return Response.json({ Error: err });
//     // }
    
//         return Response.json({ test: "Test" });

// }

// // more than 100 freqLemfilm2
// // numLines = 540
// // freqlemfilm = 100

// // // more than 50
// // numLines = 1160
// // freqlemfilm = 50

// // // more than 25
// // numLines = 2160
// // freqlemfilm = 25

// // // more than 12.5
// // numLines = 3780
// // freqlemfilm = 12.5
