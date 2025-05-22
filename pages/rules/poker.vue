<template>
<h1>Tic-Tac-Poker</h1>

<p>
Players are dealt two cards, face down, from a standard deck.  The remaining
cards are placed beside the board, and a draw pile created from the top card.
</p>

<p>
In this variant of Tic-Tac-Toe, players alternate laying cards down on the 3x3
board in pursuit of building a line of three cards that best complement their
two pocket cards.  The winner constructs the best poker hand from these five.
</p>

<h2>Essential State</h2>

<p>
The 3x3 board where cards are placed, the draw and discard piles,
and each player's hands.  A bidding variant could be constructed.
</p>

<p>
The player can only see the contents of their own hand.  No player can see what
the next card in the deck is until they draw from it.  All players can see the
cards that have been placed on the 3x3 board.
</p>

<h2>Equipment</h2>

<p>
The deck is the only equipment, each card is a possible marker on the board.
</p>

<h2>Making Lines</h2>
<p>
  ...
</p>

<h2>Eventual winning condition</h2>
<p>
  ...
</p>

<h2>Terminal and Goal</h2>
<p>
  ...
</p>

</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'rules'
})
</script>