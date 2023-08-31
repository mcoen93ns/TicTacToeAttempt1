export class TicTacToe {
  board: string[][];

  player1 = "X";

  player2 = "O";

  currentPlayer = "X";

  winner = "";

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

  placeMark(x: number, y: number): boolean {
    if (this.isCellOnTheBoard(x, y) && this.isCellEmpty(x, y)) {
      this.board[x][y] = this.currentPlayer;
      return true;
    }
    return false;
  }

  // eslint-disable-next-line class-methods-use-this
  isCellOnTheBoard(x: number, y: number): boolean {
    return x >= 0 && x < 3 && y >= 0 && y < 3;
  }

  isCellEmpty(x: number, y: number): boolean {
    return this.board[x][y] === "";
  }

  switchCurrentPlayer(): void {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  checkHorizontalWin(): boolean {
    for (let x = 0; x < 3; x += 1) {
      if (
        this.board[x][0] === this.currentPlayer &&
        this.board[x][1] === this.currentPlayer &&
        this.board[x][2] === this.currentPlayer
      ) {
        this.winner = this.currentPlayer;
        return true;
      }
    }
    return false;
  }

  checkVerticalWin(): boolean {
    for (let y = 0; y < 3; y += 1) {
      if (
        this.board[0][y] === this.currentPlayer &&
        this.board[1][y] === this.currentPlayer &&
        this.board[2][y] === this.currentPlayer
      ) {
        this.winner = this.currentPlayer;
        return true;
      }
    }
    return false;
  }

  checkFirstDiagonalForWin(): boolean {
    if (
      this.board[0][0] === this.currentPlayer &&
      this.board[1][1] === this.currentPlayer &&
      this.board[2][2] === this.currentPlayer
    ) {
      this.winner = this.currentPlayer;
      return true;
    }
    return false;
  }

  checkWin(): boolean {
    return (
      this.checkHorizontalWin() ||
      this.checkVerticalWin() ||
      this.checkFirstDiagonalForWin()
    );
  }

  play(x: number, y: number): void {
    if (this.placeMark(x, y)) {
      this.checkWin();
      this.switchCurrentPlayer();
    }
  }
}
