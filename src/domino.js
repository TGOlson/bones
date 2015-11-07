// data Domino = Domino Int Int
export type Domino = [number, number];


export const isDouble: (_:Domino) => boolean
  = ([left, right]) => left === right;


export const show: (_:Domino) => string
  = (domino) => {
    const [left, right] = domino;
    if (isDouble(domino)) {
      return `${left}|${right}`;
    }

    return ` ${left}\n -\n ${right}`;
  };
