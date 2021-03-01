const sudoku = function (board) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  findNumber(1)
  function findNumber (k) {
    if (k === 10) {
      result = board.map(el => [...el]);
      return undefined;
    }
    let row = [0,0,0,0,0,0,0,0,0];
    let col = [0,0,0,0,0,0,0,0,0];
    let block = [0,0,0,0,0,0,0,0,0];
    for(let i = 0; i < 9; i++) { // 마킹
      let index = board[i].indexOf(k);
      if (index !== -1) {
        row[i] = 1;
        col[index] = 1;
        block[Math.floor(i/3)*3 + Math.floor(index/3)] = 1;
      }
    }
    findRow(row.indexOf(0));
    function findRow(i) {// 한줄 계산 
      if (i === -1) return findNumber(k+1)
      let index = board[i].indexOf(0);
      while(index !== -1) {
        if(col[index] !== 0 || block[Math.floor(i/3)*3 + Math.floor(index/3)] !== 0) {
          index = board[i].indexOf(0, index + 1);
          continue;
        }
        col[index] = 1;
        block[Math.floor(i/3)*3 + Math.floor(index/3)] = 1
        row[i] = 1;
        board[i][index] = k;
        findRow(row.indexOf(0,i+1))
        col[index] = 0;
        block[Math.floor(i/3)*3 + Math.floor(index/3)] = 0
        row[i] = 0;
        board[i][index] = 0;
        index = board[i].indexOf(0, index + 1);
      }

    }
  }
  return result
};