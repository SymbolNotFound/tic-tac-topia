<template>

<p>
These games are intended to be simple while also touching on many varieties of
strategy. Some games are perfect-information and others are partial-information
(parallel moves or hidden cards).  Some are non-deterministic (using dice or
dealing cards).  Some involve simple markings on the board (as in the original
rules) while many involve additional equipment.
</p>

<p>
Originally meant as a demonstration of GEL, the Goal Expression Language, which
can define rules and goal conditions for applications beyond the definition of
games.  For a full listing of the GEL rulesheets, see the GitHub repo.  The most
relevant snippets are also included in the pages that follow.
</p>

<p>
...TODO overview
</p>

TODO these could be cards or formatted to look like Tic-Tac-Meta
<br/>TODO searchable?

<ul>
  <li>Tic-Tac-Meta</li>
  <li>Tic-Tac-Stones</li>
  <li>Tic-Tac-Throw-Pie</li>
  <li>Tic-Tac-Tandem</li>
  <li>Tic-Tac-Janken</li>
  <li>Tic-Tac-Rainbow</li>
  <li>Tic-Tac-Shadow</li>
  <li>Tic-Tac-Cards-Set</li>
  <li>Tic-Tac-Tiles</li>
  <li>Tic-Tac-Thrice</li>
</ul>

other variations were considered, and may be included in expansions of this game
(there are almost enough for a 4x4 version!)  The above were selected to include
many game mechanics and strategy types, some others being considered:

<ul>
  <li>Tic-Tac-Cover</li>
  <li>Tic-Tac-Words</li>
  <li>Tic-Tac-Trivia</li>
  <li>Tic-Tac-Poker</li>
  <li>Tic-Tac-Three</li>
  <li>Tic-Tac-Go</li>
  <li>Tic-Tac-Notakto</li>
  <li>Tic-Tac-Ku</li>
  <li>Tic-Tac-Coinflip
    (each turn, a coin flip determine the player to move next)</li>
  <li>Tic-Tac-Wild</li>
  <li><a href="https://boardgamegeek.com/boardgame/19584/check-lines">
    Check Lines</a></li>
  <li>Quick-Tac-Toe</li>
</ul>

<h2> The Metagame </h2>

At the start of the game, and between sub-games, players move on a Tic-Tac-Meta
board, a meta-game of different Tic-Tac-Toe variants on the classic 3x3 board.

<h3> Board and equipment </h3>

The player's cell selection and the associatd game's outcome are essential
state.  The association of each cell to its specific variant of Tic-Tac-Toe
is also essential state, and it is known at game init time.  Attention
has been given to positioning of each subgame in order to balance each line
and the combination of games along each line (players can challenge established
markings if they occupy 2 of the 3 results).

<pre>
 (8) (1) (6)

 (3) (5) (7)

 (4) (9) (2)
</pre>

<p>
Each line has at least one nondeterministic game, at least one imperfect
information game, and at least some games that may end in a draw... if at
the end of all games played there isn't a line, the player with more won
games is the winner, otherwise all draw squares are cleared and play resumes,
possibly with the rotation of players into the two roles.
</p>

<p>
The numbers in the board depicted above correspond to these games:
</p>

<ol>
<li><NuxtLink to="stones">Tic-Tac-Stones</NuxtLink>
<p>
   Also known as Three Men's Morris and is a variant of the other Mills/Morris
   games.  To compensate for the solved first-move strategy, the first player is
   not allowed to play in the center on their first turn.  A draw in this game,
   or in any of the other draw-able games, blocks line completion.
</p>
</li>

<li><NuxtLink to="throw">Tic-Tac-Throw-Pie</NuxtLink>
<p>
   Play is similar to original Tic-Tac-Toe, except the players are attempting
   to lose (hence, "throw") and the second player may take the "pie rule"
   (swapping with the first player's move and passing on their first turn).
   The board uses a triangle of 10 hexagons for additional unfamiliarity and
   a better distribution of |lines| available at each cell.
</p>
</li>

<li><NuxtLink to="tandem">Tic-Tac-Tandem</NuxtLink>
<p>
   Exact rules of Tic-Tac-Toe, except players move simultaneously.  If both
   players attempt the same position, neither gets to mark it and it becomes
   frozen or off-limits for the next turn.  So, either two squares are marked
   or nothing is marked and one cell is frozen out.  After the third move,
   players may "erase" a marking.  Two erases do not conflict but an erase and
   marking will freeze the cell and keep its marking.  First to make a line wins.
</p>
</li>

<li><NuxtLink to="janken">Tic-Tac-Janken</NuxtLink>
<p>
   Similar to Tic-Tac-Toe but players mark $\{ rock | paper | scissors \}$ at a
   chosen position.  If players mark the same cell, their chosen marking is
   compared against the other's, and if those are the same then repeat janken
   until there is a winner, and that marks the cell.  First to make a line of
   rock, paper or scissors wins.  If two lines are made at the same time there
   is a draw.
</p>
</li>

<li><NuxtLink to="rainbow">Tic-Tac-Rainbow</NuxtLink>
<p>
   A new board layout for the center square, this game uses a hexagonal grid
   that is slightly larger than the 3x3 grid of the other variants here.  The
   major difference, however, is the pieces.  Similar to the Morris pegs but
   with a different color on either side, players must use a combination of
   their own pieces and their opponent's to form a 3-line of the same color.
</p>
</li>

<li><NuxtLink to="shadow">Tic-Tac-Shadow</NuxtLink>
<p>
   A variant using imperfect information -- the first in this list to require
   GDL-II to describe -- it hides where the other player has moved and reveals
   it only if the player attempts to move into an already occupied spot.  A
   player may negate the other player's most recent move by attempting to reveal
   it, but failure results in loss of turn.  Success rewards by allowing the
   player to remove it and move anywhere available.  If an earlier move is
   revealed (but not the most recent) it is shown but not removed.  Play ends
   when the board is filled.
</p>
</li>

<li><NuxtLink to="cards">Tic-Tac-Coterie</NuxtLink>
<p>
   Perhaps the most novel entry on this list, this is a combination of a special
   deck of cards and the three-by-three board.  A reduced deck is used where
   only three properties vary (the shading is consistent in all cards, so that
   the probabilities work out better for a small hand and limited play area).
   Five cards are dealt to each player and one card played face-up in the center
   square, players must attempt to form a Set along any row, column or diagonal.
</p>
</li>

<li><NuxtLink to="tiles">Tic-Tac-Tiles</NuxtLink>
<p>
   This game is a combination of Number Scrabble with wager-based Tic-Tac-Toe,
   each
   player chooses (uniquely) a number $(1-9)$ until any three numbers add up to
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
</p>
</li>

<li><NuxtLink to="thrice">Tic-Tac-Thrice</NuxtLink>
<p>
   Players roll three d6 dice where each side indicates a board's position type
   (three sides for any edge, two for any corner and one for the center).  The
   player may choose which board for each d6 and which position for the type on
   that die.  Players are allowed to choose a board that would block their move
   even if there exists a grouping that would allow play on all three boards.
   A win must be secured on at least two boards for the player to win the game.
</p>
</li>
</ol>

<p>
More details can be found in the documentation page for each specific game.
</p>

<h2> Essential Logic & Behavior </h2>

<p>
The player may mark a position on the board by starting (and terminating) the
game its cell is associated with.  Doing so marks the board on the condition
that the board has not already been marked there.  The player must have control
of the board to mark, otherwise their only move is to not move (noop).
</p>

<p>
The board representation is considered derivative of the player's moves, even
though it is the foremost representation in the interface, and seems to be what
the user is modifying directly when they move.  However, you can reconstruct
the board representation from the player moves but you may not always be able
to reonstruct the player's moves from a board representation.  The two are
otherwise equivalent so it is simpler to represent only one or the other.
</p>

<h2> "Stealing" by challenging opponent's square </h2>

<p>
A player having two of three in a line may challenge their opponent by combining
two games.  One of them must be the target of their opponent and the other must
be one of the player's along the line.  The rules of the new game are a mix of
the rules from these two and if the player wins they win the line.  However, if
the opponent wins then the position which the player chose is captured by their
opponent!  Because this means a game may still be won with a full board, no draw
condition exists in the meta-game, either.
</p>

Example:

```
 X |   | X
---+---+---
   | X | O
---+---+---
   |   | O
```

<p>
This is a common game state when *X* leads with a center play, normally it
would result in an *X* win because *O* can't block both of the possible lines.
However, with the steal rule then *O* can attempt to steal the top-right
position with one of their owned cells along the right side -- either a version
of Tic-Tac-Shadow where the objective is to lose (combining the two corners) or
a version of Tic-Tac-Cards where the opponent's moves aren't seen unless a
card is played on one of their moves.  Both games have enough uncertainty that
the game could go either way.
</p>

<p>
In order to balance gameplay, this move is not allowed during the first five
turns.  This means *O*, the player who didn't have initiative in the meta-game,
has the first opportunity to perform this move.
</p>

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'rules'
})
</script>
