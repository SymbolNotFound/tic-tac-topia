<template>
<h1>Tic-Tac-You-Know</h1>

<p>
Players are dealt five cards, face down, from a deck with the following
distribution of 108 cards:
</p>

<ul>
  <div class="li">In each of four suits of arbitrary color,
    <div class="li">one (1) zero</div>
    <div class="li">two (2) each of 1 to 9</div>
  </div>
  <div class="li">two (2) "Skips"</div>
  <div class="li">two (2) "Draw Two"</div>
  <div class="li">two (2) "Reverse"</div>
  <div class="li">four (4) "Wild" cards</div>
  <div class="li">four (4) "Wild Draw Four" cards</div>
</ul>

<p>
After dealing these five cards, the remaining cards are placed beside the board,
with a discard/draw pile created from the top card.
</p>

<!-- TODO layout of playing surface, 3x3 board plus draw/discard and players' hands -->

<p>
In this variant of Tic-Tac-Toe, players alternate playing cards on the 3x3
board in pursuit of building a line of three cards of the same color or the
same number.
</p>

<h2>Essential State</h2>

<p>
The 3x3 board where cards are placed, the draw and discard piles,
and each player's hands (hidden from each other).
</p>

<p>
The visible cards on the board and on the top of the discard pile can be
computed from the history of turns.  Players may draw an unknown card but any
action they take after that which may affect the game state will be visible.
</p>

<h2>Equipment</h2>

<p>
The deck is the only equipment, each card may be placed on the board, and on
top of cards already placed on the board or in the discard pile.
</p>

<h2>Actions: Placement or Draw/Discard</h2>

<p>
Players take turns either putting a card in their hand onto one of the positions
on the board, or (preferring to alter their hand) may take the top card from the
draw or discard pile, putting it into their hand and then discarding one of the
cards from their hand if they have more than five cards.
</p>

<p>
When placing a card on the board, it must be either a blank position or the card
which is there must be the same suit/color or the same visible value, similar to
gameplay in <em>Crazy 8s</em>.  After this card is placed, if the (row, column
or diagonal) then has cards of the same color or same number, the player wins.
</p>

<h2>Eventual winning condition</h2>
<p>
If all cards from the draw pile are used, the discard pile is shuffled and drawn
from.  If the discard pile is also exhausted, along with both player's hands (or
neither player is able to place one of their cards anywhere) then all cards from
the board are collected and reshuffled.
</p>

<h2>Terminal and Goal</h2>

<p>
Gameplay ends whenever a player forms a line of same-suit or same-rank.  The
player who made a line wins the entire pot.
</p>

</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'rules'
})
</script>
