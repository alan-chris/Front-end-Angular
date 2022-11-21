let [x, y] = [10, 20];
// let x, y;
// [x, y] = [10, 20];

let { place, location: [x, y] } = { place: 'test', location: [10, 20] };
// variável local 'place' = 'test'
// variável local 'x' = 10
// variável local 'y' = 20
