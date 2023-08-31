import { TicTacToe } from "../../src/tictactoe";

export function playerOneWinsRow1() {
  const game = new TicTacToe();
  game.play(0, 0);
  game.play(1, 0);
  game.play(0, 1);
  game.play(1, 1);
  game.play(0, 2);
  return game;
}

export function playerTwoWinsRow2() {
  const game = new TicTacToe();
  game.play(0, 0);
  game.play(1, 0);
  game.play(0, 1);
  game.play(1, 1);
  game.play(2, 0);
  game.play(1, 2);
  return game;
}

export function playerOneWinsRow3() {
  const game = new TicTacToe();
  game.play(0, 0);
  game.play(1, 0);
  game.play(0, 1);
  game.play(1, 2);
  game.play(0, 2);
  game.currentPlayer = game.player1;
  return game;
}

export function playerTwoWinsColumn2() {
  const game = new TicTacToe();
  game.play(0, 0);
  game.play(0, 1);
  game.play(1, 0);
  game.play(1, 1);
  game.play(2, 2);
  game.play(2, 1);
  return game;
}

export function playerOneWinsDiagonal1() {
  const game = new TicTacToe();
  game.play(0, 0);
  game.play(0, 1);
  game.play(1, 1);
  game.play(0, 2);
  game.play(2, 2);
  game.currentPlayer = game.player1;
  return game;
}

export function playerTwoWinsDiagonal2() {
  const game = new TicTacToe();
  game.play(0, 0);
  game.play(0, 2);
  game.play(1, 0);
  game.play(1, 1);
  game.play(2, 1);
  game.play(2, 0);
  return game;
}

export function draw() {
  const game = new TicTacToe();
  game.play(0, 0);
  game.play(1, 1);
  game.play(2, 2);
  game.play(2, 1);
  game.play(0, 1);
  game.play(0, 2);
  game.play(1, 2);
  game.play(1, 0);
  game.play(2, 0);
  return game;
}
