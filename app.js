const knightMoves = (start, [endX, endY]) => {
  const visited = Array(8);
  for (let i = 0; i < 8; i++) visited[i] = Array(8).fill(false, 0, 8);

  const queue = [[...start, []]];
  while (true) {
    let [x, y, history] = queue.shift();
    if (x < 0 || y < 0 || x > 7 || y > 7 || visited[x][y]) continue;
    visited[x][y] = true;
    history = history.slice();
    history.push([x, y]);
    if (x == endX && y == endY) {
      return history;
    }
    queue.push([x + 2, y + 1, history]);
    queue.push([x + 2, y - 1, history]);
    queue.push([x - 2, y + 1, history]);
    queue.push([x - 2, y - 1, history]);
    queue.push([x + 1, y + 2, history]);
    queue.push([x - 1, y + 2, history]);
    queue.push([x + 1, y - 2, history]);
    queue.push([x - 1, y - 2, history]);
  }
};

console.log(knightMoves([3, 3], [4, 3]));
