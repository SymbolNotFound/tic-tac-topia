# Tic-Tac-NumberTiles

Players select from a choice of tiles based only on knowing only their value and
having at least that much in their bank.  Players are given some value in their
bank at the beginning of each turn which enables them to select tiles, and tile
values are determined by their ability to form a combined value of 15.

This combines aspects of Tic-Tac-Wager and aspects of the game Number Scrabble.


## Essential State

The randomized layout of the line of tiles, the player's choice (and the number
value) at each turn, which only the choosing player gets to see.

There is no board, but the game of Number Scrabble is isomorphic to the original
format of Tic-Tac-Toe (referencing the Magic Square shows why this is so).

## Equipment

Nine tiles, each containing the numbers 1 through 9 on one side, and the other
containing its value according to this table:

number | value
==============
   1   |   1
   2   |   2
   3   |   1
   4   |   2
   5   |   3
   6   |   2
   7   |   1
   8   |   2
   9   |   1

## Number Scrabble

In Number Scrabble, players alternate choosing a (unique) number between 1..9,
where the first player to have three numbers which can add to 15 is the winner.
It is possible to draw in Number Scrabble but in Tic-Tac-NumberTiles when all
the tiles are chosen if no player has won then they are shuffled and the game
is played again until there is a winner.

This means that games could possibly go on indefinitely, but due to the random
nature of which tiles are available this is not likely to happen.
