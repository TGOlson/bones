// put cool stuff here
// import type {Tuple} from './types/tuple';

import type {Board} from './board';
import {show} from './board';
// import type {Domino} from './domino';

export const board: Board = {
  piece: [6, 1],
  children: [
    {
      piece: [6, 6],
      children: [],
    },
    {
      piece: [1, 4],
      children: [
        {piece: [4, 2], children: []},
      ],
    },
  ],
};

export const showBoard = () => show(board);

console.log(showBoard());
