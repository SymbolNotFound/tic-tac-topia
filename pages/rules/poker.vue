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

<h2>Scoring Lines</h2>
<p>
The player selects which row, column or diagonal and wagers based on the five
card hand that results.  The player with the best (poker-scored) hand wins the
entire pot.
</p>

<h2>Eventual winning condition</h2>

<p>
There may be a draw if both hands are the same value (possible because two
players may have the same pair and be matched against the same line).  This
could be avoided if players continue wagering for initiative, or wagering for
selection of (exclusive) lines.

Or, suits could be given an arbitrary ranking.  Players may agree to split the
pot if there is a tie.  To avoid draws, and assuming only two players, the game
included here has the player who chose this game (i.e., the player dealt first)
chooses a line and the other player must choose any other line.  There is a
vanishingly small chance of still getting a tie, then (but it is possible).

In games with wagering, the last person to raise gets to choose the line first.
This version of the game will probably be included in dealme.cards
</p>

<h2>Terminal and Goal</h2>
<p>
Game ends when the final round is played (called or folded).
</p>

</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'rules'
})
</script>