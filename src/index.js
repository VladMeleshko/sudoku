module.exports = function solveSudoku(matrix) {
  // your solution
  return sudokuSolution(matrix);
}
//решение
function sudokuSolution(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        for (let num = 1; num < 10; num++) {
          if (checkFun(matrix, row, col, num)) {
            matrix[row][col] = num;
            if (sudokuSolution(matrix)) {
              return matrix;
            } else {
              matrix[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

//Блок проверок

function checkFun(matrix, row, col, num) {
  let conditionRow = sudokuRow(matrix, row, num);
  let conditionColumn = sudokuColumn(matrix, col, num);
  let conditionBlock = sudokuBlock(matrix, row, col, num);
  return conditionRow && conditionColumn && conditionBlock;
}

//Проверка строк

function sudokuRow(matrix, row, num) {
  for (let col = 0; col < 9; col++) {
    if (matrix[row][col] === num) {
      return false;
    }
  }
  return true;
}
//Проверка столбцов

function sudokuColumn(matrix, col, num) {
  for (let row = 0; row < 9; row++) {
    if (matrix[row][col] === num) {
      return false;
    }
  }
  return true;
}

//Проверка блоков 3х3

function sudokuBlock(matrix, row, col, num) {
  let rowBlock = row - row % 3;
  let colBlock = col - col % 3;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (matrix[r + rowBlock][c + colBlock] === num) {
        return false;
      }
    }
  }
  return true;
}