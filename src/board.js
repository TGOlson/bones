// data Board = Board
//     { piece  :: Domino
//     , childA :: Maybe Board
//     , childB :: Maybe Board
//     -- only available on spinners, Nothing otherwise
//     , childC :: Maybe Board
//     , childD :: Maybe Board
//     }

import R from 'ramda';

import type {Domino} from './domino';
import * as D from './domino';

export type Board = {
  piece: Domino,
  children: [?Board, ?Board, ?Board, ?Board]
}


const showChildren: (_:Board, _:boolean) => string
  = ({piece, children}, traversingRight) => {
    // assume only one child, no spinners, for now
    const [b1] = children;

    if (traversingRight) {
      return R.join('\n', [
        D.show(piece),
        b1 ? showChildren(b1, traversingRight) : '',
      ]);
    }

    return R.join('\n', [
      b1 ? showChildren(b1, traversingRight) : '',
      D.show(piece),
    ]);
  };


export const show: (_:Board) => string
  = ({piece, children}) => {
    const [b1, b2] = children; // ignore spinner options for now

    return R.join('\n', [
      b1 ? showChildren(b1, false) : '',
      D.show(piece),
      b2 ? showChildren(b2, true) : '',
    ]);
  };
