"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tictactoe_1 = require("./tictactoe");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/playTicTacToe", (req, res) => {
    const game = new tictactoe_1.TicTacToe();
    game.playBotVsBot();
    const response = `I am pleased to announce the winner of the game!: ${game.winner}`;
    res.json({
        response,
    });
});
app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});
