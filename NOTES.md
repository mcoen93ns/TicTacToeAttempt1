# Notes

## E2E tests
- Player 1 wins with horizontal victory ✅
    - Write end to end test ✅

- Player 2 wins with vertical victory ✅
    - Write end to end test ✅

- Player 1 wins with diagonal victory ✅
    - Write end to end test ✅

- Draw ✅
    - Write end to end test ✅

- Bot mode: a game is played between two BOTs 🙌
    - Write end to end test ✅

## Components
- Starting a new game ✅
-- empty game board
-- player 1 is X
-- player 2 is O
-- player 1 starts

- Playing a move ✅
-- player 1 plays a move
-- no winner yet
-- player 2 becomes current player
-- player 2 plays a move
-- no winner yet
-- player 1 becomes current player

- Detecting a winner ✅
-- player 1 wins with horizontal victory ✅
-- player 2 wins with vertical victory ✅
-- player 1 wins with diagonal victory from top left to bottom right ✅
-- player 2 wins with diagonal victory from top right to bottom left ✅

- Detecting a draw ✅

- Bot mode 
-- Trigger the bots to play a game 🙌
--- Player 1 starts
--- Picks a random empty cell
--- Places his mark
--- Player 2 picks a random empty cell
--- Places his mark
--- Repeat until there is a winner or a draw
-- Result: winner or draw

## Units
- Game board
-- empty game board, 3x3 ✅

- Players 
-- player 1 is X ✅
-- player 2 is O ✅
-- player 1 starts ✅

- Placing a mark
-- player 1 places a mark at 0,0 ✅
-- player 2 places a mark at 1,1 ✅
-- player 2 places a mark at 0,0 --> error ✅
-- player 1 places a mark at 3,3 --> error ✅

- Switch current player
-- Player 1 --> Player 2 ✅
-- Player 2 --> Player 1 ✅

- Check for horizontal winner
-- After 1 move, no winner yet ✅
-- After 2 moves, no winner yet ✅
-- 1st row: X X X --> Player 1 wins ✅
-- 2nd row O O O --> Player 2 wins ✅
-- 3rd row X X X --> Player 1 wins ✅

- Check for vertical winner
-- 1st column: '' '' '' --> No winner yet ✅
-- 2nd column: O O O --> Player 2 wins ✅

- Check for diagonal winner (1st diagonal, top left to bottom right)
-- 1st diagonal: X '' '' --> No winner yet ✅
-- 1st diagonal: X X X --> Player 1 wins ✅

- Check for diagonal winner (2nd diagonal, top right to bottom left)
-- 2nd diagonal: '' '' O --> No winner yet ✅
-- 2nd diagonal: O O O --> Player 2 wins ✅

- Check for draw ✅

- Picking a random empty cell
-- new board, all cells empty ✅
-- board with 1 free cell ✅
-- board with no free cells ✅
