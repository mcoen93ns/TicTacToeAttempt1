import express, { Request, Response } from "express";
import { TicTacToe } from "./tictactoe";

// Create a new express application instance
const app: express.Application = express();

app.use(express.json());

// Define the POST endpoint
app.post("/playTicTacToe", (req: Request, res: Response) => {
  const game = new TicTacToe();
  game.playBotVsBot();
  const response = `I am pleased to announce the winner of the game!: ${game.winner}`;

  res.json({
    response,
  });
});

// The server is listening on port 3000
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
