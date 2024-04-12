# Tic-Tac-Meta

A meta-game of different Tic-Tac-Toe variants, together forming a Tic-Tac-Toe board game.

## Essential State

The player's cell selection and the associatd game's outcome are essential
state.  The association of each cell to its specific variant of Tic-Tac-Toe
is also essential state, and it is known at game init time.  It is possible
to make a variant where the players choose among different variants based on
position type and which games have not yet been played, but here attention
has been paid to positioning of each subgame in order to balance each line.

```
 (8) (1) (6)

 (3) (5) (7)

 (4) (9) (2)
```

Each line has at least one nondeterministic game, at least one imperfect
information game, and at least some games that may end in a draw... if at
the end of all games played there isn't a line, the player with more won
games is the winner, otherwise all draw squares are cleared and play resumes,
possibly with the rotation of players into the two roles.

The numbers in the board depicted above correspond to these games:

1. [Tic-Tac-Throw-Pie](tic-tac-throw-pie.md)

   Play is similar to original Tic-Tac-Toe, except the players are attempting
   to lose (hence, "throw") and the second player may take the "pie rule"
   (swapping with the first player's move and passing on their first turn).  The
   board may use a triangle of hexagons for additional unfamiliarity.

2. [Nine Holes](tic-tac-morris.md)

   Also known as Three Men's Morris and is a variant of the other Mills/Morris
   games.  To compensate for the solved first-move strategy, the first player is
   not allowed to play in the center on their first turn.  A draw in this game,
   or in any of the other draw-able games, blocks line completion.

3. [Tic-Tac-Tandem](tic-tac-tandem.md)

   Exact rules of Tic-Tac-Toe, except players move simultaneously.  If both
   players attempt the same position, neither gets to mark it and it becomes
   off-limits for one turn.

4. [Tic-Tac-Janken](tic-tac-janken.md)

   Similar to Tic-Tac-Toe but players mark $\{ rock | paper | scissors \}$ at a
   chosen position.  If players mark the same cell, their chosen marking is
   compared against the other's, and if those are the same then repeat janken
   until there is a winner, and that marks the cell.  First to make a line of
   rock, paper or scissors wins.  If two lines are made at the same time there
   is a draw.

5. [Tic-Tac-Rainbow](tic-tac-rainbow.md)

   A new board layout for the center square, this game uses a hexagonal grid
   that is slightly larger than the 3x3 grid of the other variants here.  The
   major difference, however, is the pieces.  Similar to the Morris pegs but
   with a different color on either side, players must use a combination of
   their own pieces and their opponent's to form a 3-line of the same color.

6. [Tic-Tac-Shadow](tic-tac-shadow.md)

   A variant using imperfect information -- the first in this list to require
   GDL-II to describe -- it hides where the other player has moved and reveals
   it only if the player attempts to move into an already occupied spot.  A
   player may negate the other player's most recent move by attempting to reveal
   it, but failure results in loss of turn.  Success rewards by allowing the
   player to remove it and move anywhere available.  If an earlier move is
   revealed (but not the most recent) it is shown but not removed.  Play ends
   when the board is filled.

7. [Tic-Tac-Cards (mini-Set deck)](tic-tac-cards-set.md)

   Perhaps the most novel entry on this list, this is a combination of Set (the
   puzzle card game) and the three-by-three board.  A reduced deck is used where
   only three properties vary (the shading is consistent in all cards, so that
   the probabilities work out better for a small hand and limited play area).
   Five cards are dealt to each player and one card played face-up in the center
   square, players must attempt to form a Set along any row, column or diagonal.

8. [Tic-Tac-Tiles](tic-tac-tiles.md)

   This game is a variant of Number Scrabble.  The original game just has each
   player choose (uniquely) a number $(1-9)$ until any three numbers add up to
   fifteen.  It is isomorphic to Tic-Tac-Toe (one need only refer to the Magic
   Square to see the relationship) so by itself it wouldn't be an interesting
   variant.  I have added two new elements -- each number must be purchased for
   a specified number of chips (odds (except 5): 1 chip, evens: 2 chips,
   five: 3 chips).  This is borrowed from a variant where wagers are made for
   each position on the board.  The other new element is that the number and
   value are printed on opposite sides of 9 tiles.  The player only knows the
   cost of a tile but not what its numeric value is.  For fairness in strategy,
   the first player gets only *one* chip to start with, and each turn a player
   is given *two* additional points in their bank.  The points roll over, so a
   player may choose to pass in order to make a bigger play on the next turn.

9. [Tic-Tac-Thrice](tic-tac-thrice.md)

   Players roll three d6 dice where each side indicates a board's position type
   (three sides for any edge, two for any corner and one for the center).  The
   player may choose which board for each d6 and which position for the type on
   that die.  Players are allowed to choose a board that would block their move
   even if there exists a grouping that would allow play on all three boards.
   A win must be secured on at least two boards for the player to win the game.

More details can be found in the documentation page for each specific game.


## Essential Logic & Behavior

The player may mark a position on the board by starting (and terminating) the
game its cell is associated with.  Doing so marks the board on the condition
that the board has not already been marked there.  The player must have control
of the board to mark, otherwise their only move is to not move (noop).

The board representation is considered derivative of the player's moves, even
though it is the foremost representation in the interface, and seems to be what
the user is modifying directly when they move.  However, you can reconstruct
the board representation from the player moves but you may not always be able
to reonstruct the player's moves from a board representation.  The two are
otherwise equivalent so it is simpler to represent only one or the other.
