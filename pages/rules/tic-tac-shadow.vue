<template>
<div>
<h1>
  Tic-Tac-Shadow
</h1>

<p>
An imperfect-information variant of Tic-Tac-Toe where the opponent's moves are
not visible unless the player attempts to also move there in a subsequent turn.
</p>

<h2> Board and Equipment </h2>

<p>
The standard 3x3 board and markers from Tic-Tac-Toe.  An unbiased judge is
needed to maintain the state of where each player has moved, and each player
only sees their own representation of the board (this can also be achieved
with two physical boards, where the player only sees their own and the judge
can see and manipulate either board).
</p>

<h2> Legal player actions </h2>

<p>
Players are allowed to move anywhere that appears open to them.  However, their
move is not communicated to the opponent, (nor the opponent's move to them) so
if a position is selected that the opponent has already marked, they lose a turn
and the marking is revealed.
</p>

<h2> Terminal condition </h2>

<p>
The game is over if a player scores a three in a row.  It is a draw if the board
is filled before either player can do so.
</p>

<h2> Goal payouts </h2>

<p>
Winnings are awarded all-or-nothing, a draw does not result in a shared win.
</p>

</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'rules'
})
</script>
