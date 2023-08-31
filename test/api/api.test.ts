/* eslint-disable import/no-extraneous-dependencies */
import request from "supertest";
import express from "express";
import { TicTacToe } from "../../src/tictactoe"; // adjust the path accordingly
import { app } from "../../src/api"; // adjust the path accordingly

describe("TicTacToe API", () => {
  it("should play the game and announce the winner", async () => {
    const res = await request(app).post("/playTicTacToe").send({});

    expect(res.status).toBe(200);
    expect(res.body.response).toContain(
      "I am pleased to announce the winner of the game!:"
    );
  });
});
