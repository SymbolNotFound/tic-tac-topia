// Copyright (c) 2025, Symbol Not Found
// 
// Redistributions of source code must retain the above copyright notice, this
// list of conditions and the following disclaimer.
// 
// Redistributions in binary form must reproduce the above copyright notice,
// this list of conditions and the following disclaimer in the documentation
// and/or other materials provided with the distribution.
// 
// Neither the name of the copyright holder nor the names of its contributors
// may be used to endorse or promote products derived from this software without
// specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//
// github:SymbolNotFound/tic-tac-topia/shared/types/equip.d.ts

// Some common types among composables and the components that use them.

// Most equipment (everything except dice, essentially)
// can also be represented by its absence.
export type EMPTY = " "
const BLANK: EMPTY = " "

// Unifying base type for all equipment, which any board can operate with.
export type Equipment =
    Marker |
    D6 |
    Unit |
    NumberTile |
    FrenchCard |
    SetCard |
    EMPTY

export type Marker = "X" | "O" | EMPTY

export type D6 = 1 | 2 | 3 | 4 | 5 | 6;

export type Unit = { color: "RED" | "BLUE" } | EMPTY

export type NumberTile = {
  front: number
  back: number
} | EMPTY

export type FrenchCard = {
  suit: "HEARTS" | "SPADES" | "DIAMONDS" | "CLUBS" | "JOKER"
  rank: "ACE" | "2" | "3" | "4" | 
      "5" | "6" | "7" | "8" | "9" |
      "10" | "JACK" | "QUEEN" | "KING" |
      "JOKER" | "JOKER2"
} | EMPTY

export type SetCard = {
  count: 1 | 2 | 3
  color: "RED" | "GREEN" | "PURPLE"
  shape: "ROUND" | "POINTY" | "WIGGLE"
} | EMPTY
