interface Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

function plot(point: Point) {
  if ('z' in point) {
      // point é um `Point3D`
      // ...
  } else {
      // point é um `Point`
      // ...
  }
}
