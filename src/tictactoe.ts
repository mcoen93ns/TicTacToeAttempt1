export class TicTacToe {
  board: string[][];

  player1 = "X";

  player2 = "O";

  currentPlayer = "X";

  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    this.player1 = "X";
    this.player2 = "O";
    this.currentPlayer = "X";
  }

  placeMark(x: number, y: number) {
    this.board[x][y] = this.currentPlayer;
  }
}
