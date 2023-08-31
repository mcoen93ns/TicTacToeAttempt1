# Backlog

## Bot mode

Desc: As a game observer, I want to see a TicTacToe game played on the console between two BOTs, so that
I can understand how it works.

UAT: Given an executable TicTacToe game, when the game is launched via shell script, then is printed on the
shell console the game flow and the final state.

Acceptance criteria:
- The game is played between two BOTs.
- All the rules of the game are respected.
- The game flow is printed on the shell console.
- The final state is printed on the shell console.

## API mode

Desc: As a game portal developer, I want to get a TicTacToe game played between two BOTs, so that I can
spike around how to use the JSON game to create a web TicTacToe version of it.

UAT: Given a TicTacToe API, when a new game is requested via /api/TicTacToe/newGame, then is provided
to the requester a JSON with a game played in BOT mode

Acceptance criteria:
- The game can be started via an API call.
- The game flow is provided in JSON format.
- The final state is provided in JSON format.

