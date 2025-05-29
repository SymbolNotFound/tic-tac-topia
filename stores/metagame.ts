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
// github:SymbolNotFound/tic-tac-topia/stores/metagame.ts

import { BLANK } from "~/shared/types/equip"
import type { PlayerRole } from "~/shared/types/role"

export type MetagameEvent =
    | MetaplayDefineGame
    | MetaplayStart
    | MetaplaySubgameStart
    | MetaplayEvolveGame
    | MetaplayReopen
    | MetaplaySubgameTerminal
    | MetaplayTerminal
    | MetaplaySubgameResign
    | MetaplayResign

// Shared pinia store for the top-level game state (the MetaGame).
// This retains all subgame history within its history
export const useMetagameStore = defineStore('metagameStore', {
  state: () => {
    const board = useMNK(3, 3, 3)
    const history = [] as MetagameEvent[]
    const players = [] as PlayerInfo[]

    function boardMarkings(): PlayerAction[] {
      const actions = [] as PlayerAction[]
      for (var e of history) {
        if (e.me != "end-subgame") { continue }
        let winner: MaybePlayer = undefined
        for (var role in e.payouts) {
          if (e.payouts[role] == 100) {
            winner = role as PlayerRole
            break
          }
        }
        if (!winner) { continue }

        actions.unshift({
          role: winner,
          action: "mark",
          coord: e.coord,
          equip: [winner as Marker],
        })
      }
      return actions 
    }

    return { board, history, players }
  },
  actions: {
    async playSubgame(name: string, initiative: PlayerRole) {

      // TODO...
    },
    async evolveSubgame(from: RectCoord, onto: RectCoord) {

      // TODO this part will be a fun demonstration of GEL
    },
    async subgameWin(coord: RectCoord, marker: Marker) {

      // TODO...
    },
    async subgameDraw(coord: RectCoord) {

      // TODO...
    },
    // TODO more actions for other metagame state transitions
  }
})

type MetaplayDefineGame = {
  me: "define-subgame"
  name: string
  coord: RectCoord,
  rules: string[]
}

type MetaplayStart = {
  me: "start-metagame"
  roles: { [key:string]: string }
}

type MetaplaySubgameStart = {
  me: "start-subgame"
  coord: RectCoord,
  subgame: string
  roles: { [key:string]: string }
  history: PlayerAction[]
}

type MetaplayEvolveGame = {
  me: "evolve-game"
  coord: RectCoord,
  name: string
  subgames: string[]
  rules: string[]
}

type MetaplayReopen = {
  me: "reopen-metagame"
  remain: PlayerRole[]
}

type MetaplaySubgameTerminal = {
  me: "end-subgame"
  coord: RectCoord,
  subgame: string
  payouts: {
    [key:string]: number
  }
}

type MetaplayTerminal = {
  me: "end-metagame"
  payouts: {
    [key:string]: number
  }
}


type MetaplaySubgameResign = {
  me: "resign-subgame"
  subgame: string
  quitter: string
}

type MetaplayResign = {
  me: "resign-metagame"
  quitter: string
}
