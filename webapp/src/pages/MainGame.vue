<template>
  <q-page class="column items-center justify-around">
    <main>
      <tic-tac-meta-board
        @choose="handlePlayerChoice"
      ></tic-tac-meta-board>
    </main>

    <footer>
      <div>
        <!-- socials, discord?, etc. for SymbolNotFound and Turing Game -->
        <p class="text-body2">&copy; 2024 Symbol Not Found</p>
      </div>
    </footer>

    <q-dialog
      v-model="dialog"
      transition-show="flip-up"
      transition-hide="flip-down">
      <q-card>
        <q-card-section class="row items-center">
          <span>Player 'x' wins!</span>
        </q-card-section>
        <q-card-section class="row items-center">
          <q-btn flat label="Play Again" v-close-popup></q-btn>
        </q-card-section>
      </q-card> 
    </q-dialog>
  </q-page>
</template>

<style scoped>
footer {
  color: slategrey;
  text-align: center;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import TicTacMetaBoard from '../components/MetaBoard.vue'

const dialog = ref(false)

interface MetaBoardState {
  moves: number[][]
  turn: number
}

const meta = ref<MetaBoardState>({
  moves: [],
  turn: 1
});

function handlePlayerChoice(position: [number, number]) {
  meta.value.moves.push(position)
}
</script>