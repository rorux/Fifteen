function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export const setMoves = (id, cells) => {
  for (let i in cells) {
    cells[i][1] = null;
  }
  const row = +id.substring(0, 1);
  const col = +id.substring(1, 2);
  if (row !== 4) {
    const upId = (row + 1).toString() + col;
    cells[upId][1] = "up";
  }
  if (row !== 1) {
    const downId = (row - 1).toString() + col;
    cells[downId][1] = "down";
  }
  if (col !== 1) {
    const rightId = row + (col - 1).toString();
    cells[rightId][1] = "right";
  }
  if (col !== 4) {
    const leftId = row + (col + 1).toString();
    cells[leftId][1] = "left";
  }
  return cells;
};

export const setField = (id, value, move) => {
  const changedField = {};
  const row = +id.substring(0, 1);
  const col = +id.substring(1, 2);
  if (move === "up") {
    const id = (row - 1).toString() + col;
    changedField[id] = [value, "down"];
  }
  if (move === "down") {
    const id = (row + 1).toString() + col;
    changedField[id] = [value, "up"];
  }
  if (move === "left") {
    const id = row + (col - 1).toString();
    changedField[id] = [value, "right"];
  }
  if (move === "right") {
    const id = row + (col + 1).toString();
    changedField[id] = [value, "left"];
  }
  return changedField;
};

export const randomInit = () => {
  let zero = null;
  let start = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  shuffle(start);
  shuffle(start);
  const cells = {
    11: [0, null],
    12: [0, null],
    13: [0, null],
    14: [0, null],
    21: [0, null],
    22: [0, null],
    23: [0, null],
    24: [0, null],
    31: [0, null],
    32: [0, null],
    33: [0, null],
    34: [0, null],
    41: [0, null],
    42: [0, null],
    43: [0, null],
    44: [0, null],
  };

  let i = 0;
  for (let cell in cells) {
    cells[cell][0] = start[i];
    if (start[i] === 0) zero = cell;
    i++;
  }

  const cellsSet = setMoves(zero, cells);
  return cellsSet;
};

export const isGameOver = (cells) => {
  if (
    cells[11][0] == 1 &&
    cells[12][0] == 2 &&
    cells[13][0] == 3 &&
    cells[14][0] == 4 &&
    cells[21][0] == 5 &&
    cells[22][0] == 6 &&
    cells[23][0] == 7 &&
    cells[24][0] == 8 &&
    cells[31][0] == 9 &&
    cells[32][0] == 10 &&
    cells[33][0] == 11 &&
    cells[34][0] == 12 &&
    cells[41][0] == 13 &&
    cells[42][0] == 14 &&
    cells[43][0] == 15
  ) {
    return {
      11: [1, null],
      12: [2, null],
      13: [3, null],
      14: [4, null],
      21: [5, null],
      22: [6, null],
      23: [7, null],
      24: [8, null],
      31: [9, null],
      32: [10, null],
      33: [11, null],
      34: [12, null],
      41: [13, null],
      42: [14, null],
      43: [15, null],
      44: [0, null],
    };
  } else return false;
};
