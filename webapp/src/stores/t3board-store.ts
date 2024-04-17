import { ref } from 'vue'
import { defineStore } from 'pinia'
import { PlayerMove, hasLine } from '../ts/T3Board'

export const useMetaboardStore = defineStore('metaboard', () => {
  const history = ref<PlayerMove[]>([])

  function terminal(): boolean {
    return hasLine(history.value) || history.value.length == 9
  }

  return { history, terminal }
})
