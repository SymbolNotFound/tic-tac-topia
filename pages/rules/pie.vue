<template>
<main>
<p>
The Pie Rule allows for rebalancing the advantage of <b>initiative</b> by
allowing the second player to choose between two options:
</p>

<ul>
  <li>acknowledge the first player's move and make a following move</li>
  <li>choose to take the first player's move, then the first player follows by
    making the second move</li>
</ul>

<p>
  The naming of the rule comes from the traditional protocol of sharing cake or
  pies &ndash; one person cuts, the other chooses.  If the cutting person makes
  an imbalanced proportion, the other person gets first choice.  If the cut is
  fair then it matters very little which slice is taken.
</p>

<p>
  This motivates the first player to avoid optimal moves when the game has been
  "solved" for specific initial play &ndash; choosing the known best first move
  means that the second player can take that advantage.
  
  <b>Hex</b> is an example of a classic game that typically uses the Pie Rule.
</p>
</main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'rules'
})
</script>