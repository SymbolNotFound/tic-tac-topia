<template>
<main>
<h1>Tic-Tac-Throw (with pie rule)</h1>

Game for two players, alternating turns making marks on a 3x3 board.
The objective is to avoid making a line of three.

<h2> Board and equipment </h2>

 <ul>
 <li> 10 hex (triangular) board of squares that can be marked "X" or "O". </li>
 <li> initially all squares are blank. </li>
 </ul>
<h2> <NuxtLink to="pie">Pie Rule</NuxtLink> </h2>

<h2> Terminal </h2>

 <ul>
 <li> The game is over when a player completes a line, </li>
 <li> or if there are no more moves available to play. </li>
 </ul>

<h2> Goal payouts </h2>

A 100/50/0 for win/draw/lose based on whether a line was formed and who made it.

<pre><code>
?p.win, ?p $= 100, ?q $= 0 :- role(?p), role(?q), line(?q.marker)
?p $= 50 :- role(?p), not line(x), not line(o)
</code></pre>
</main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'rules'
})
</script>
