<template>
<h1>Tic-Tac-RoShamBo (rock, paper, scissors)</h1>

<p>
A game for two players on the traditional 3x3 board where players choose
between Rock, Paper and Scissors when marking a position on the board.
</p>

<h2>Board and equipment</h2>

<p>
3x3 grid of Cells that are initially blank and may be marked by either
player
</p>

<h2>Allowed moves</h2>

<p>
Both players mark the board at the same time, choosing one of Rock, Paper or
Scissors.
</p>

<h2>Janken subgame</h2>

<ul>
<li>If players choose different locations, both moves succeed
</li>

<li>If players choose the same location, the winner of the hands succeeds and
   the other player's move is canceled
</li>

<li>If players choose the same location and the same hand, they stay on that
   location and continue janken until a winning play is made (no draws).
</li>
</ul>

<h2>Terminal</h2>

<ul>
<li>When either player completes a line of the same hand gesture (regardless of
whether they played each of them), they win
</li>

<li>Unless both players complete different lines or together complete the same
line, within the same turn, then the game is a draw
</li>
</ul>

<h2>Goal Payouts</h2>

<p>
Typical 100/50/0 for win/draw/loss.
</p>

<p>
The game may have a draw-less variant where a superior hand may knock another
cell in the same line, continuing with the simultaneous play mechanics.  By
pigeonhole principle, you cannot have a full board without at least one pair
in a potential line having a superior/inferior relationship.
</p>

</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'rules'
})
</script>
