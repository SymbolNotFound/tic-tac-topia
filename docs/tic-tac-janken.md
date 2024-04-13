# Tic-Tac-Janken (rock, paper, scissors)

A game for two players on the traditional 3x3 board where players choose
between Rock, Paper and Scissors for marking the board.

## Board and equipment

3x3 grid of Cells that are initially blank and may be marked by either
player

## Allowed moves

Both players mark the board at the same time, choosing one of Rock, Paper or
Scissors.

## Janken subgame

 * If players choose different locations, both moves succeed
 * If players choose the same location, the winner of the hands succeeds and
   the other player's move is canceled
 * If players choose the same location and the same hand, they stay on that
   location and continue janken until

## Terminal

 * When either player completes a line of the same hand gesture (regardless of
   whether they played each of them), they win
 * Unless both players complete different lines or together complete the same
   line, within the same turn, then the game is a draw

## Goal Payouts

Typical 100/50/0 for win/draw/loss.

The game may have a draw-less variant where a superior hand may knock another
cell in the same line, continuing with the simultaneous play mechanics.  By
pigeonhole principle, you cannot have a full board without at least one pair
in a potential line having a superior/inferior relationship.
