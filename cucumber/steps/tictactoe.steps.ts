/* eslint-disable import/no-extraneous-dependencies */
import { loadFeature, defineFeature } from "jest-cucumber";
import { TicTactoe } from "../../src/tictactoe";

const feature = loadFeature("./cucumber/features/tictactoe.feature");

defineFeature(feature, (test) => {
  test("Player 1 wins with a horizontal victory", ({
    given,
    when,
    and,
    then,
  }) => {
    given("a new game of TicTacToe is started", () => {});

    when(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {});

    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {});

    and(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {});

    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {});

    and(/^Player marks cell (\d+),(\d+)$/, (arg0, arg1) => {});

    then(/^Player 1 wins$/, (arg0) => {});
  });
});
