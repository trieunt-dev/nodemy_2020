/*
    Tính tỉ số cho đột A và B. biết đội A tham gia hackeRank và nhận được số điểm lần lượt qua 3 trận đấu là 2, 3, 4, đội B lần lượt à 1,3,2.

    Cách tính tỉ số : trận đầu 2 > 1 => đội A +1, trận 2 đội 3 = 3 cả 2 đội +0, trận ba 4 > 2 đội A +1. trả về array như ouput
*/

function calcScore(teamA, teamB) {
    let teamACount = 0;
    let teamBCount = 0;
    let score = [];

    for (let i = 0; i < teamA.length; i++) {
        if (teamA[i] > teamB[i]) {
            teamACount++;
        }

        if (teamA[i] < teamB[i]) {
            teamBCount++;
        }
    }
    score.push(teamACount, teamBCount);

    return score;
}

let teamA = [2, 3, 4];
let teamB = [1, 3, 2];

console.log(calcScore(teamA, teamB));
