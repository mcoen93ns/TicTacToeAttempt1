import { TicTacToe } from "../../src/tictactoe";

describe("TicTacToe", () => {
  describe("Is played on a board", () => {
    it("A 3x3 board with empty cells", () => {
      const game = new TicTacToe();
      expect(game.board).toEqual([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
    });
  });
  describe("Is played by 2 players", () => {
    it("Player 1 plays with X", () => {
      const game = new TicTacToe();
      expect(game.player1).toBe("X");
    });
    it("Player 2 plays with O", () => {
      const game = new TicTacToe();
      expect(game.player2).toBe("O");
    });
    it("Player 1 starts", () => {
      const game = new TicTacToe();
      expect(game.currentPlayer).toBe("X");
    });
  });
});
