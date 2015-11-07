// data GameState = GameState
//     { players     :: [(Player, PlayerState)]
//     , board       :: Board
//     , boneyard    :: [Domino]
//     , spinner     :: Maybe Domino
//     , currentTurn :: Player
//     }

import type {Tuple} from './types/tuple';

import type {Board} from './board';
import type {Domino} from './domino';
import type {Player, PlayerState} from './player';


type Game = {
  players: Array<Tuple<Player, PlayerState>>,
  board: Board,
  boneyard: Array<Domino>,
  spinner: ?Domino,
  currentTurn: Player,
};

export type {Game};
