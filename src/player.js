class PlayerA {}
class PlayerB {}

import type {Domino} from './domino';


// data Player = PlayerA | PlayerB -- ...
type Player = PlayerA | PlayerB // ... later


// data PlayerState = PlayerState
//     { hand  :: [Domino]
//     , score :: Int
//     }
type PlayerState = {
  hand: Array<Domino>,
  score: number
};

export type {Player, PlayerState};

export default {
  PlayerA,
  PlayerB,
};
