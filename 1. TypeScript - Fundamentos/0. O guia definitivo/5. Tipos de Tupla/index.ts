let point: [ number, number, number ] = [ 0, 0, 0 ];

// - -

function draw(...point: [ number, number, number? ]): void {
  const [ x, y, z ] = point;
  console.log('point', ...point);
}

draw(100, 200); // loga: point 100, 200
draw(100, 200, 75); // loga: point 100, 200, 75
draw(100, 200, 75, 25); // Erro: Espera 2-3 argumentos mas recebeu 4
