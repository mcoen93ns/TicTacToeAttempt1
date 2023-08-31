/* eslint-disable import/no-extraneous-dependencies */
import { loadFeature, defineFeature } from "jest-cucumber";
import { TicTacToe } from "../../src/tictactoe";

const feature = loadFeature("./cucumber/features/tictactoe.feature");

defineFeature(feature, (test) => {
  test("Player 1 wins with a horizontal victory", ({
    given,
    when,
    and,
    then,
  }) => {
    const game = new TicTacToe();
    given("a new game of TicTacToe is started", () => {});

    when(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    then(/^Player 1 wins$/, () => {
      expect(game.winner).toBe(game.player1);
    });
  });
  test("Player 2 wins with a vertical victory", ({
    given,
    when,
    and,
    then,
  }) => {
    const game = new TicTacToe();
    given("a new game of TicTacToe is started", () => {});

    when(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    then(/^Player 2 wins$/, () => {
      expect(game.winner).toBe(game.player2);
    });
  });

  test("Player 1 wins with a diagonal victory", ({
    given,
    when,
    and,
    then,
  }) => {
    const game = new TicTacToe();
    given("a new game of TicTacToe is started", () => {});

    when(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    then(/^Player 1 wins$/, () => {
      expect(game.winner).toBe(game.player1);
    });
  });
  test("Draw", ({ given, when, and, then }) => {
    const game = new TicTacToe();
    given("a new game of TicTacToe is started", () => {});

    when(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    and(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });
    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });
    and(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });
    and(/^Player 2 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });
    and(/^Player 1 marks cell (\d+),(\d+)$/, (arg0, arg1) => {
      game.play(arg0, arg1);
    });

    then(/^the game ends in a draw$/, () => {
      expect(game.winner).toBe("Draw");
    });
  });
  test("Bot mode", ({ given, when, then }) => {
    const game = new TicTacToe();
    given("a new game of TicTacToe is started", () => {});

    when("the bots begin playing", () => {
      game.playBot();
    });

    then("the game ends in a win or a draw", () => {
      expect(game.winner).not.toBe("");
    });
  });
});
