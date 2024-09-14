# Tic-Tac-Shadow

An imperfect-information variant of Tic-Tac-Toe where the opponent's moves are
not visible unless the player attempts to also move there in a subsequent turn.

## Board and Equipment

The standard 3x3 board and markers from Tic-Tac-Toe.  An unbiased judge is
needed to maintain the state of where each player has moved, and each player
only sees their own representation of the board (this can also be achieved
with two physical boards, where the player only sees their own and the judge
can see and manipulate either board).

## Legal player actions

Players are allowed to move anywhere that appears open to them.  However, their
move is not communicated to the opponent, (nor the opponent's move to them) so
if a position is selected that the opponent has already marked, they lose a turn
and the marking is revealed.

## Terminal condition

The game is over if a player scores a three in a row.  It is a draw if the board
is filled before either player can do so.

## Goal payouts

Winnings are awarded all-or-nothing, a draw does not result in a shared win.
