# Notes

## E2E tests
- Player 1 wins with horizontal victory ✅
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

- Check for winner
-- After 1 move, no winner yet ✅
-- After 2 moves, no winner yet ✅
-- 1st row: X X X --> Player 1 wins ✅
-- 2nd row O O O --> Player 2 wins ✅
-- 3rd row X X X --> Player 1 wins ✅
