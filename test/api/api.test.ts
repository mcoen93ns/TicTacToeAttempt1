/* eslint-disable import/no-extraneous-dependencies */
import request from "supertest";
import { app } from "../../src/api";

describe("TicTacToe API", () => {
  it("should play the game and announce the winner", async () => {
    const res = await request(app).post("/playTicTacToe").send({});

    expect(res.status).toBe(200);
    expect(res.body.response).toContain(
      "I am pleased to announce the winner of the game!:"
    );
  });
});
