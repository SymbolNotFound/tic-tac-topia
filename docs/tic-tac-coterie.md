# Tic-Tac-Coterie

Players are dealt five cards from an special deck.  This deck has 27 cards, each
unique and consisting of these properties:

- **color**: symbols may be one of three available colors (easily distinguished)
- **contour**: symbols may take a rounded, pointed or wavy shape
- **count**: one, two or three symbols (all the same color and contour)

In this variant of Tic-Tac-Toe, players alternate laying cards down on the 3x3
board in pursuit of making a valid line constructed only of groupings where each
card shares the property of the other two, or is distinct between the three cards
in the group.  Because there are only three options in each of these properties,
once you have a pair of cards you know what the third is in a valid combination.


## Essential State

The 3x3 board where cards are placed, the draw pile and each player's hands.

The player can only see the contents of their own hand.  No player can see what
the next card in the deck is until they draw from it.

## Equipment

The deck is the only equipment, each card is a possible marker on the board.

## Making Lines

A valid line can only be made from three cards matching or distinct in each of
its properties.  It is valid for one category to match while the others are
distinct, e.g. a red rounded single, double and triple (color and contour all
match but the counts are different) as long as there are no pairs with an odd
one out.  Because all cards are distinct it is not possible to have three that
match on all properties, but it is more difficult to notice the tricks that
are constructed from three distinct categories.

## Eventual winning condition

If all nine board locations are occupied but no line has formed yet, play may
continue by placing additional cards onto the existing pile until each cell has
a second card.  Repeat until there is a third; if there is still a stalemate (if
that is even possible), reshuffle the cards and try again.

## Terminal and Goal

The game is only over when a player has formed a line, so it is 100/0 or 0/100.
