

export type EMPTY = " "
export type Equipment = EMPTY | Marker | D6 | Unit | NumberTile | PlayingCard

export type Marker = " " | "X" | "O"

export type D6 = 1 | 2 | 3 | 4 | 5 | 6;

export type Unit = { color: "RED" | "BLUE" }

export type NumberTile = {
  front: number
  back: number
}

export type PlayingCard = {
  suit: "HEARTS" | "SPADES" | "DIAMONDS" | "CLUBS"
  rank: "ACE" | "2" | "3" | "4" | 
      "5" | "6" | "7" | "8" | "9" |
      "10" | "JACK" | "QUEEN" | "KING"
}

export type SetCard = {
  count: 1 | 2 | 3
  color: "RED" | "GREEN" | "PURPLE"
  shape: "ROUND" | "POINTY" | "WIGGLE"
}
