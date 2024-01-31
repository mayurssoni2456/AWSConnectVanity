# Plotify Pairing Workspace

This is an empty shell repo with the following node packages pre-installed:

* typescript
* jest
* ts-node

When preparing for the Pairing exercise, you can clone this repo and use it as your workspace. 

Feel free to add additional packages as you please or create one completely from scratch. 

The important thing is to have a worskpace that makes you feel most comfortable.

## *NOTE:*  Pairing exercises will not involve html or any ui framework. All code will be executed on the terminal.

Wish you the best.

Plotify .


## requirements 

Game
Grids 
    6rows x 7cols
Players 
    winner - 4 pieces in any direction / diagonals are allowed 
Tokens
    . x o


# Entities 

1. Game
2. Grids 6x7
3. Players
4. Tokens


# Entities Attributes

1. Game
        gameName, players, playerTurn,  winner
2. Grids 6x7
        rows columns
3. Player
        name, token
4. Token
        symbol

# Relationsships 

Game -> Board - 1:1
Game ->  Players  1:m
Players -> Tokens 1:1

# Winning Strategy
    4 pieces vertically, diagonal, horizontal


# Service
    Game 
        1. initiate Game and start game
        2. makeMove
        3. displayBoard
