import { ref } from 'vue'
import { BLANK, type  Equipment } from '~/shared/types/equip'

export default function(m: number, n: number, k: number) {
  const coord = (index: number) => [
      Math.floor(index / m) + 1,
      (index % m) + 1]

  const board = ref(new Array(9).map((i) => (
    {marker: BLANK, index: i, coord: coord(i)}) as RectCell))

  return { board }
}

export class RectGrid {
  // ...
}

// {[ 1..3 ]} & {[ 1..3 ]}
export type RectCoord = [number, number]

export class RectCell {
  constructor(
    readonly index: number,
    readonly coord: RectCoord,
    public marker: Equipment) {}
  
  get name(): string {
    const [ row, col ] = this.coord
    return `cell_${row}_${col}`
  }

  apply(value: Equipment) {
    this.marker = value
  }
}
