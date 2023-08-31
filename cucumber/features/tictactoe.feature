Feature: TicTacToe

	Scenario: Player 1 wins with a horizontal victory
		Given a new game of TicTacToe is started
		When Player 1 marks cell 0,0
		And Player 2 marks cell 1,0
		And Player 1 marks cell 0,1
		And Player 2 marks cell 1,1
		And Player 1 marks cell 0,2
		Then Player 1 wins
	
	Scenario: Player 2 wins with a vertical victory
		Given a new game of TicTacToe is started
		When Player 1 marks cell 0,0
		And Player 2 marks cell 0,1
		And Player 1 marks cell 1,0
		And Player 2 marks cell 1,1
		And Player 1 marks cell 2,2
		And Player 2 marks cell 2,1
		Then Player 2 wins

	Scenario: Player 1 wins with a diagonal victory
		Given a new game of TicTacToe is started
		When Player 1 marks cell 0,0
		And Player 2 marks cell 0,1
		And Player 1 marks cell 1,1
		And Player 2 marks cell 1,2
		And Player 1 marks cell 2,2
		Then Player 1 wins

	Scenario: Draw
		Given a new game of TicTacToe is started
		When Player 1 marks cell 0,0
		And Player 2 marks cell 0,1
		And Player 1 marks cell 0,2
		And Player 2 marks cell 1,0
		And Player 1 marks cell 1,2
		And Player 2 marks cell 1,1
		And Player 1 marks cell 2,0
		And Player 2 marks cell 2,2
		And Player 1 marks cell 2,1
		Then the game ends in a draw
	
	Scenario: Bot mode
		Given a new game of TicTacToe is started
		When the bots begin playing
		Then the game ends in a win or a draw