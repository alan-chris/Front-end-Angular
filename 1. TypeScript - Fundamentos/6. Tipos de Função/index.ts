let printPoint: (point: Point) => string;

interface Point {
  x: number;
  y: number;
  z?: number;
  toGeo: () => Point;
}

let Point: {
  new(): Point;
};
let ShorthandEquivalent: new () => Point;

let Point2: {
  new (): Point;
  fromLinear(point: Point): Point;
  fromGeo(point: Point): Point;
};
