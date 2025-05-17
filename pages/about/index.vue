<template>
<main>
<h1>About Tic-Tac-Topia</h1>

<p>This game was designed during research into building a General Game Playing
system, capable of playing any game whose rules can be described sufficiently.
Similar projects (Stanford's GDL and GDL-II, Ludii, Zillions of Games, etc.)
demonstrate this potential exists, but each are missing some things and none of
them provide a convenient web or online multiplayer interface.  They also are
entirely focused on games and testing of AI reasoning, while I see a broader
problem-solving potential with a programming language like GEL.
</p>

<p>Here I will try to provide some details about the site and its content.  The
games were selected with the intention of covering a wide range of mechanics and
the backend was selected for its developer experience and ability to maintain it
with a small team - presently, only myself, and with diverted attention at that!
</p>

<h2> <NuxtLink to="./Games">Games Selection</NuxtLink> </h2>

<p>The meta-game follows the rules of classic Tic-Tac-Toe, itself composed of
nine Tic-Tac-Toe variants which were carefully selected and, in most cases, are
heavily modified variations or entirely new games.</p>

<p>These games were chosen to maintain a common theme with a familiar game,
while covering a range beyond perfect-information abstract strategy games.  They
include partial-information games (opponent moves are unknown, or holding cards
that only the player can see).  They include games of chance (cards and dice)
though most are entirely skill-based.  They include a variety of board layouts
because the standard 3x3 grid is too easily solved with some gameplay mechanics.
</p>

<p>
Four of the nine games are simultaneous-play, the others are turn-based.  Some
of the games may end without a clear winner, while some are unable to end in a
draw.  To make things interesting, the meta-game allows for players to challenge
the marking of their opponent if they have marked a cell that is on the same
line, by challenging to a combination of the games under each of the two cells.
</p>

<h2> <NuxtLink to="./GameUI">Game UI</NuxtLink> </h2>

TODO doc...

<h2> <NuxtLink to="./GEL">Goal Expression Language</NuxtLink> </h2>

<h2> <NuxtLink to="./Source">Source Code and Licensing</NuxtLink> </h2>

<h2> <NuxtLink to="./Humans">Human Intelligence</NuxtLink> </h2>

<h2> <NuxtLink to="./Robots">Artificial Intelligence</NuxtLink> </h2>

<h2> <NuxtLink to="./Servers">Serving Infrastructure</NuxtLink> </h2>


<SiteAboutNext href="./T3Games">Games Selection</SiteAboutNext>
</main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'about'
})
</script>
