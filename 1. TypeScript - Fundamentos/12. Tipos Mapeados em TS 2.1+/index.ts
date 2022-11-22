type Stringify<T> = {
  [P in keyof T]: string;
};

interface Point { x: number; y: number; }

type StringPoint = Stringify<Point>;

const pointA: StringPoint = { x: '4', y: '3' };
// válido