// data Domino = Domino Int Int
type Domino = [number, number];

const isSpinable: (_:Domino) => boolean
  = ([left, right]) => left === right;

export type {Domino};

export default {
  isSpinable,
};
