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

- Bot mode: a game is played between two BOTs ✅
    - Write end to end test ✅

## API mode

### Basic version: only announcing the winner
- Create the API (basic version) ✅
- Create openAPI definition ✅
- Create a test in Jest ✅
- Create a test in ReadyAPI 🙌

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

# Automating docker-compose
- ✅ Create docker compose
- ✅ Create docker compose commands
- ✅ Add newman smoketest
- ✅ Run smoketest when doing docker refresh
- Improve pipeline with docker quality gates
    - ✅ hadolint
        -- Install Scoop via Powershell (non-admin): iwr -useb get.scoop.sh | iex
        -- Restart VS Code
        -- Run following command: scoop install hadolint 
        -- Inspect using hadolint: hadolint Dockerfile
    -  ✅ syft
        -- Install syft: scoop install syft
        -- Create a syft command to check the SBOM
    - dive
        -- ✅ install
        -- ✅ Add to refresh command
    - ✅ container structure test
        -- ✅ create command in npm
        -- Added following tests:
            -- node is installed
            -- package.json should exist
            -- node_modules should exist
    - ✅ run npm ci to speed up building
    - ✅ run trivy security scan
        -- manual command
        -- integrate into "pipeline" command
    - ⛔️ run snyk container test
        -- as snyk is already running in the pipeline to cover code and dependencies, this seems to be redundant.
    - 🦑 run typescript build before building the docker.
        Now we have typescript in dependencies but it's not actually necessary as the container runs javascript
    - 🤲 Remove npm run build 

    "dive": "docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock -e CI=true wagoodman/dive:latest mathijs/tictactoe:local",
    docker run --rm -it -v /container-structure-test-config.yml:/config/container-structure-test-config.yml -v /var/run/docker.sock:/var/run/docker.sock gcr.io/gcp-runtimes/container-structure-test:latest test --image mathijs/tictactoe:local --config /config/container-structure-test-config.yml

Homework 14-03 onwards
    - Create a new folder for the API stuff (open api spec, newman collection)
    - Test GitHub actions to see if all the changes that were made on 14-03 actually work
    - Add the docker compose stuff including the newman tests (see slack and https://github.com/NikiforovAll/testing-with-newman-demo)
    - Update the simple cookiecutter to use all the new stuff that we have made


NOTES from 20-03 onwards
- ✅ Add Hadolint to GitHub Actions
- 🙋‍♂️ Add Chef Inspec to GitHub Actions
- Add Container Structure Test
- Add Dive
- Add Trivvy
- Add Docker Compose step
