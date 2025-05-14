<template>
<div>
<h1>
  Tic-Tac-Thrice
</h1>

<p>
Three of the traditional $3x3$ boards are played on simultaneously.  Each player
takes turns rolling 3d6 dice, with `side`, `corner`, and `center` placement as
the symbols on the dice.  The player may choose which dice are assigned to which
board (and in particular, which corner or side piece).  the player with a line
on the most boards wins.
</p>

<h2> Board and Equipment </h2>

<p>
There are three Tic-Tac-Toe boards, three dice, and the board can be marked by
the player's marking ('X' or 'O').
</p>

<h2> Legal player actions </h2>

<p>
Control of the board alternates between players.  Players begins their turn  by
rolling all three dice then choosing which board to assign each die to, and the
open position on that board to play if there is more than one playable position.
</p>

<p>
The board does not need to have a playable position for the die assignment, if
there is no match then the player does not get to move on that board, but the
other assignments will potentially have more strategic significance.
</p>

<h2> Terminal condition </h2>

<p>
Gameplay completes when there are no more possible moves, or no more possible
lines that can be completed.  Players may continue to make plays on a board even
if their opponent has formed a line.
</p>

<h2> Goal payouts </h2>

<p>
Winnings are awarded as all-or-nothing based on which player had the most lines
overall (including multiple lines on the same board).
</p>

</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'rules'
})
</script>
