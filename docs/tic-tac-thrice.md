# Tic-Tac-Thrice

Three of the traditional $3x3$ boards are played on simultaneously.  Each player
takes turns rolling 3d6 dice, with `side`, `corner`, and `center` placement as
the symbols on the dice.  The player may choose which dice are assigned to which
board (and in particular, which corner or side piece).  the player with a line
on the most boards wins.

## Board and Equipment

There are three Tic-Tac-Toe boards, three dice, and the board can be marked by
the player's marking ('X' or 'O').

## Legal player actions

Control of the board alternates between players.  Players begins their turn  by
rolling all three dice then choosing which board to assign each die to, and the
open position on that board to play if there is more than one playable position.

The board does not need to have a playable position for the die assignment, if
there is no match then the player does not get to move on that board, but the
other assignments will potentially have more strategic significance.

## Terminal condition

Gameplay completes when there are no more possible moves, or no more possible
lines that can be completed.  Players may continue to make plays on a board even
if their opponent has formed a line.

## Goal payouts

Winnings are awarded as all-or-nothing based on which player had the most lines
overall (including multiple lines on the same board).
