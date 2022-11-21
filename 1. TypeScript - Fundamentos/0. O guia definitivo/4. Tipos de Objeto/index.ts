let point: {
  x: number;
  y: number;
};

point = { x: 0, y: 0 };
// OK, mesmas propriedades

point = { x: 'zero', y: 0 };
// Erro, tipo da propriedade `x` está errado

point = { x: 0 };
// Erro, faltando propriedade `y`

point = { x: 0, y: 0, z: 0 };
// Erro, atribuição literal deve contar apenas propriedades declaradas

const otherPoint = { x: 0, y: 0, z: 0 };
point = otherPoint;
// OK, propriedades extras não são relevantes para atribuição não literal

// - - 

interface Point {
  x: number;
  y: number;
}

//let point: Point;
let point2: Point;

interface Point3d extends Point {
  z: number;
}

interface Point {
  x: number;
  y: number;
  z?: number;
}

// - -

let pointz: Point;

pointz = { x: 0, y: 0, z: 0 };
// OK, mesmas propriedades

pointz = { x: 0, y: 0 };
// OK, mesmas propriedades, parâmetro opcional omitido

pointz = { x: 0, y: 0, z: 'zero' };
// Erro, tipo da propriedade `z` está errado

// - -

interface Point {
  x: number;
  y: number;
  z?: number;
  toGeo?(): Point;
}

// - -

interface HashMapOfPoints {
  [key: string]: Point;
}

// - -

const Foo = 'Foo';
const Bar = 'Bar';
const Baz = Symbol();

interface MyInterface {
  [Foo]: number;
  [Bar]: string;
  [Baz]: boolean;
}
