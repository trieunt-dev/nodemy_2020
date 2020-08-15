/*
    Tính giá trị tuyệt đối của hiệu số hai đường chéo của ma trận hình vuông cạnh 3 x 3 (mảng 2 chiều)

    - input [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

    // 11 2 4 <- row
    // 4 5 6
    // 10 8 -12

    |(11 + 2 -12) - (4 + 5 + 10)|
    - output : 15
*/

function tinhDuongCheoMaTranVuong(numbersMatrix) {
    let diagonal = 0;
    let diagonalSecond = 0;

    for (let i = 0; i < numbersMatrix.length; i++) {
        for (let j = 0; j < numbersMatrix[i].length; j++) {
            if (i == j) {
                diagonal += numbersMatrix[i][j];
            }

            if (i + j == numbersMatrix.length - 1) {
                diagonalSecond += numbersMatrix[i][j];
            }
        }
    }

    return Math.abs(diagonal - diagonalSecond);
}

let numbersMatrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];

let result = tinhDuongCheoMaTranVuong(numbersMatrix);

console.log(result);
