import { ref } from 'vue'
import { BLANK, type Marker } from '.'

export default function<Marker> (m: number, n: number, k: number) {
  const coord = (index: number) => [
      Math.floor(index / m) + 1,
      (index % m) + 1]

  const board = ref(new Array(9).map((i) => (
    {marker: BLANK, coord: coord(i)}) as RectCell<string>))

  return { board }
}

// {[ 1..3 ]} & {[ 1..3 ]}
export type RectCoord = [number, number]

export class RectCell<MarkType extends string> {
  constructor(
    readonly coord: RectCoord,
    public marker: MarkType) {}
  
  get name(): string {
    const [ row, col ] = this.coord
    return `cell_${row}_${col}`
  }
}
