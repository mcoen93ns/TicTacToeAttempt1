"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicTacToe = void 0;
class TicTacToe {
    constructor() {
        this.player1 = "X";
        this.player2 = "O";
        this.currentPlayer = "X";
        this.winner = "";
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
        this.player1 = "X";
        this.player2 = "O";
        this.currentPlayer = "X";
    }
    placeMark(x, y) {
        if (this.isCellOnTheBoard(x, y) && this.isCellEmpty(x, y)) {
            this.board[x][y] = this.currentPlayer;
            return true;
        }
        return false;
    }
    isCellOnTheBoard(x, y) {
        return x >= 0 && x < 3 && y >= 0 && y < 3;
    }
    isCellEmpty(x, y) {
        return this.board[x][y] === "";
    }
    switchCurrentPlayer() {
        if (this.currentPlayer === this.player1) {
            this.currentPlayer = this.player2;
        }
        else {
            this.currentPlayer = this.player1;
        }
    }
    checkHorizontalWin() {
        for (let x = 0; x < 3; x += 1) {
            if (this.board[x][0] === this.currentPlayer &&
                this.board[x][1] === this.currentPlayer &&
                this.board[x][2] === this.currentPlayer) {
                this.winner = this.currentPlayer;
                return true;
            }
        }
        return false;
    }
    checkVerticalWin() {
        for (let y = 0; y < 3; y += 1) {
            if (this.board[0][y] === this.currentPlayer &&
                this.board[1][y] === this.currentPlayer &&
                this.board[2][y] === this.currentPlayer) {
                this.winner = this.currentPlayer;
                return true;
            }
        }
        return false;
    }
    checkFirstDiagonalForWin() {
        if (this.board[0][0] === this.currentPlayer &&
            this.board[1][1] === this.currentPlayer &&
            this.board[2][2] === this.currentPlayer) {
            this.winner = this.currentPlayer;
            return true;
        }
        return false;
    }
    checkSecondDiagonalForWin() {
        if (this.board[0][2] === this.currentPlayer &&
            this.board[1][1] === this.currentPlayer &&
            this.board[2][0] === this.currentPlayer) {
            this.winner = this.currentPlayer;
            return true;
        }
        return false;
    }
    checkDraw() {
        for (let x = 0; x < 3; x += 1) {
            for (let y = 0; y < 3; y += 1) {
                if (this.board[x][y] === "") {
                    return false;
                }
            }
        }
        this.winner = "Draw";
        return true;
    }
    checkWin() {
        return (this.checkHorizontalWin() ||
            this.checkVerticalWin() ||
            this.checkFirstDiagonalForWin() ||
            this.checkSecondDiagonalForWin() ||
            this.checkDraw());
    }
    findRandomEmptyCell() {
        const emptyCellCoordinates = [];
        for (let x = 0; x < 3; x += 1) {
            for (let y = 0; y < 3; y += 1) {
                if (this.board[x][y] === "") {
                    emptyCellCoordinates.push(x, y);
                    return emptyCellCoordinates;
                }
            }
        }
        return emptyCellCoordinates;
    }
    play(x, y) {
        if (this.placeMark(x, y)) {
            this.checkWin();
            this.switchCurrentPlayer();
        }
    }
    botPlay() {
        const emptyCellCoordinates = this.findRandomEmptyCell();
        if (emptyCellCoordinates) {
            this.play(emptyCellCoordinates[0], emptyCellCoordinates[1]);
        }
    }
    playBotVsBot() {
        while (this.winner === "") {
            this.botPlay();
        }
    }
}
exports.TicTacToe = TicTacToe;
const game = new TicTacToe();
game.playBotVsBot();
console.log(`The game has ended: ${game.winner}`);
