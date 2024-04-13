# Tic-Tac-Throw (with pie rule)

Game for two players, alternating turns making marks on a 3x3 board.
The objective is to avoid making a line of three.

## Board and equipment

 * 10 hex (triangular) board of squares that can be marked "X" or "O".
 * initially all squares are blank.

## Pie Rule

 * If o wants to swap with the first "X" move, they can trade markers
   and play resumes with x playing "O"

## Terminal

 * The game is over when a player completes a line,
 * or if there are no more moves available to play.

## Goal payouts

A 100/50/0 for win/draw/lose based on whether a line was formed and who made it.

?p.win, ?p $= 100, ?q $= 0 :- role(?p), role(?q), line(?q.marker)
?p $= 50 :- role(?p), not line(x), not line(o)
