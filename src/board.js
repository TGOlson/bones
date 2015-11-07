// data Board = Board
//     { piece  :: Domino
//     , childA :: Maybe Board
//     , childB :: Maybe Board
//     -- only available on spinners, Nothing otherwise
//     , childC :: Maybe Board
//     , childD :: Maybe Board
//     }

import type {Domino} from './domino';

type Board = {
  piece: Domino,
  children: [?Board, ?Board, ?Board, ?Board]
}

export type {Board};
