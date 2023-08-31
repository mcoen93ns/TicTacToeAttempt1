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
});
