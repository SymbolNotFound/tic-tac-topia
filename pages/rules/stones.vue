<template>

<h1>Tic-Tac-Classic (Nine Holes)</h1>

<p>
Also known as *Three Men's Morris*, see also very close variants in *Achi*
(four pieces per player), *Shisima* (octagonal board) and *Dara* (larger 6x5
board, play does not terminate with the first line but continues with captures).
In *Tant fant* the drop phase is removed, all pieces start on a player's side.
A variant of *Tant fant* also requires lines to be diagonal and not horizontal
or vertical.
</p>

<p>
*Nine Holes* does not restrict movement, whereas the close variants require
that movement actions be done to adjacent positions only.
</p>

<h2>Board and Equipment</h2>

<p>
A three by three rectangular grid.  In the Nine Holes variant this can be a
peg-and-hole arrangement (or a ring and pole arrangement) which have no
connections drawn between positions.  If other variants are also available for
play (perhaps as a selection of rules done by the first player, the one who
chose the game), then boards with the horizontal, vertical and diagonal lines
drawn on them would be preferred.
</p>

<p>
For equipment, each player has three (or four) pieces that can be placed on
a position of the baord.
</p>

<h2>Legal player actions</h2>

<p>
Play proceeds in two phases:
</p>

<ol>
<li>
<b>drop phase</b> - each player alternates turns placing their piece on an open
position of the board.
</li>

<li>
<b>move phase</b> - each player moves one of their pieces to any (or adjacent)
position of the board.
</li>
</ol>

<h2>Terminal condition</h2>

<p>
The game is over when a player forms a three in a row of their own pieces.  The
game may end in a draw if neither player wants to continue, or if the same piece
arrangement is seen a third time.
</p>

<h2>Goal payouts</h2>

<p>
The player who forms a three-in-a-row wins the entire stake.
</p>

</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'rules'
})
</script>
