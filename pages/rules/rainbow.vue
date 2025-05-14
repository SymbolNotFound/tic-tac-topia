<template>
<main>
<h1>Tic-Tac-Rainbow</h1>

<h2> Board and Equipment </h2>

<p>
A slightly extended board, basically a 5x5 without the corners (or a 3x3 with
each edge row/column extended away from the center).
</p>

```
   [] [] []
[] [] [] [] []
[] [] [] [] []
[] [] [] [] []
   [] [] []
```

<p>
This can be turned 45 degrees and shown as a hexagonal grid to get a better
balance of positions to involved lines, otherwise there are a lot of positions
that are part of 4 possible lines.
</p>

<p>
Each player gets seven two-sided pegs.  Six of them use the colors Red, Orange,
Yellow, Green, Blue, Violet.  Each of the colored pegs share neighboring colors
on another peg -- i.e., possible pegs {R/O, O/Y, Y/G, G/B, B/V, V/R} may be
oriented either way, so the player has two of each color they can directly use.
The seventh peg is a black and white piece which can only be played after all
their colored pieces have been placed on the board.  When placed, white (whild)
will match with any color and black (blocker) will notmatch with any color.
</p>

<p>
Initially, all of the pegs are off the board.  They are identified as belonging
to one of the players and the player can only manipulate their own pieces.
</p>

<h2> Legal player actions </h2>

<p>
Each turn, the player may choose between one of the following:
</p>

<ol>
<li> Taking a piece that is off the board and placing it into any open spot on
   the board, choosing which color to point upwards (the downward-facing
   color is considered hidden, but the other player knows which one it is).
</li>

<li> Taking a piece that is already on the board and flipping it while keeping it
   at the same position on the board.
</li>

<li> Taking a piece that is already on the board and moving it to another position
   while keeping the same color showing upwards.
</li>
</ol>

<p>
The player may not pass nor move a piece that is on the board off of the board.
</p>

<h2> Terminal condition </h2>

<p>
The game ends when a player has made three in a row of the same color.
</p>

<p>
Because there are fewer pegs than holes and pegs may be moved or flipped, it
should always be possible to make a move so the game will never end in a draw.
</p>

<h2> Goal payouts </h2>

<p>
The player who gets three in a row wins all the stake, the loser wins nothing
regardless of other peg positions.  There is no bonus for scoring a double line.
</p>

<h2> Variants </h2>

<p>
Dice variant?
</p>

<p>
Is there a misere variant?  One could imagine accidental line creation but since
there is no exhaustion criteria (moves are always possible) it would take either
a gradual loss of available positions or a very creative strategy on the part of
a player setting up a position that forces a win on *any* subsequent action.
</p>

<p>
Perhaps with a constraint that the same piece cannot be moved twice within two
(or three?) successive moves, or by constraining actions such as with dice or
cards.  Or perhaps with the addition of a third player (thus having 21 positions
and 21 pieces).
</p>

</main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'rules'
})
</script>
