Feature: TicTacToe

	Scenario: Player 1 wins with a horizontal victory
		Given a new game of TicTacToe is started
		When Player 1 marks cell 0,0
		And Player 2 marks cell 1,0
		And Player 1 marks cell 0,1
		And Player 2 marks cell 1,1
		And Player 1 marks cell 0,2
		Then Player 1 wins