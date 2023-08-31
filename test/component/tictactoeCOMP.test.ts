import { TicTacToe } from "../../src/tictactoe";
import { draw, playerOneWinsDiagonal1, playerOneWinsRow1, playerTwoWinsColumn2, playerTwoWinsDiagonal2, playerTwoWinsRow2 } from "../doubles/double";

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
  describe("After a couple of moves, it is possible that a player wins", () => {
    describe("This can be through a horizontal victory", () => {
      it("Player 1 finishes the 1st row: X X X", () => {
        const game = playerOneWinsRow1();
        expect(game.winner).toBe(game.player1);
      });
      it("Player 2 finishes the 2nd row: O O O", () => {
        const game = playerTwoWinsRow2();
        expect(game.winner).toBe(game.player2);
      });
    });
    describe("Or through a vertical victory", () => {
      it("Player 2 finishes the 2nd column: O O O", () => {
        const game = playerTwoWinsColumn2();
        expect(game.winner).toBe(game.player2);
      });
    });
    describe("Or through a diagonal victory, from the top left to the bottom right", () => {
      it("Player 1 finishes the 1st diagonal: X X X", () => {
        const game = playerOneWinsDiagonal1();
        expect(game.winner).toBe(game.player1);
      });
    });
    describe("And also through a diagonal victory, from the top right to the bottom left", () => {
      it("Player 2 finishes the 2nd diagonal: O O O", () => {
        const game = playerTwoWinsDiagonal2();
        expect(game.winner).toBe(game.player2);
      });
    });
  });
  describe("But..", () => {
    it("When all cells are filled, and there is no winner, then the game is a draw", () => {
      const game = draw();
      expect(game.winner).toBe("Draw");
    });
  });
});
