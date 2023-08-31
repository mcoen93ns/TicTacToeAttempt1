import { TicTacToe } from "../../src/tictactoe";
import {
  playerOneWinsRow1,
  playerOneWinsRow3,
  playerTwoWinsRow2,
} from "../doubles/double";

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
  describe("A player can place his mark in a cell on the board", () => {
    const game = new TicTacToe();
    it("Player 1 makes a move on the board, cell 0,0", () => {
      game.placeMark(0, 0);
      expect(game.board[0][0]).toBe("X");
    });
    it("Player 2 makes a move on the board, cell 0,1", () => {
      game.currentPlayer = game.player2;
      game.placeMark(0, 1);
      expect(game.board[0][1]).toBe("O");
    });
  });
  describe("But only when the cell is not occupied yet", () => {
    const game = new TicTacToe();
    it("Player 1 wants to make a move on the empty cell 0,0", () => {
      expect(game.isCellEmpty(0, 0)).toBe(true);
    });
    it("Player 2 then also makes a move on this cell, which is not possible", () => {
      game.placeMark(0, 0);
      expect(game.isCellEmpty(0, 0)).toBe(false);
    });
  });
  describe("And also only when the cell is on the board", () => {
    it("Cell 3,3 is not on the board", () => {
      const game = new TicTacToe();
      expect(game.isCellOnTheBoard(3, 3)).toBe(false);
    });
  });
  describe("After playing a move, the next player is up", () => {
    const game = new TicTacToe();
    it("Player 1 --> Player 2", () => {
      game.switchCurrentPlayer();
      expect(game.currentPlayer).toBe("O");
    });
    it("Player 2 --> Player 1", () => {
      game.switchCurrentPlayer();
      expect(game.currentPlayer).toBe("X");
    });
  });
  describe("After playing, we need to check if a player has won by having 3 marks in a row", () => {
    const game = new TicTacToe();
    it("When only one move has been played, there is no winner yet", () => {
      game.placeMark(0, 0);
      expect(game.checkHorizontalWin()).toBe(false);
    });
    it("The same goes for when 2 moves have been played", () => {
      game.placeMark(0, 1);
      expect(game.checkHorizontalWin()).toBe(false);
    });
    it("But when the 1st row looks like: X X X, then player 1 has won", () => {
      const gamePlayer1WillWin = playerOneWinsRow1();
      expect(gamePlayer1WillWin.checkHorizontalWin()).toBe(true);
    });
    it("And when the 2nd row looks like: O O O, then player 2 has won", () => {
      const gamePlayerTwoWillWin = playerTwoWinsRow2();
      expect(gamePlayerTwoWillWin.checkHorizontalWin()).toBe(true);
    });
    it("When the 3rd row looks like: X X X, then player 1 has won", () => {
      const gamePlayer1WillWinRow3 = playerOneWinsRow3();
      expect(gamePlayer1WillWinRow3.checkHorizontalWin()).toBe(true);
    });
  });
});
