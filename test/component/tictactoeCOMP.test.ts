import { TicTacToe } from "../../src/tictactoe";

describe("TicTacToe", () => {
  describe("Is a game that contains the following elements when a new game is started", () => {
    it("A 3x3 board with empty cells", () => {
      const game = new TicTacToe();
      expect(game.board).toEqual([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
    });
    it("2 players", () => {
      const game = new TicTacToe();
      expect(game.player1).toBe("X");
      expect(game.player2).toBe("O");
    });
    it("Player 1 starts", () => {
      const game = new TicTacToe();
      expect(game.currentPlayer).toBe("X");
    });
  });
  describe("The game flow works as follows", () => {
    const game = new TicTacToe();
    it("Player 1 plays first", () => {
      expect(game.currentPlayer).toBe("X");
    });
    it("Player 1 makes a move on the board, cell 0,0", () => {
      game.play(0, 0);
      expect(game.board[0][0]).toBe("X");
    });
    it("There is no winner yet, so the game continues", () => {
      expect(game.winner).toBe("");
    });
    it("Player 2 plays next", () => {
      expect(game.currentPlayer).toBe("O");
    });
    it("Player 2 makes a move on the board, cell 0,1", () => {
      game.play(0, 1);
      expect(game.board[0][1]).toBe("O");
    });
    it("Still, there is no winner yet, so the game continues", () => {
      expect(game.winner).toBe("");
    });
    it("Player 1 plays next", () => {
      expect(game.currentPlayer).toBe("X");
    });
  });
});
