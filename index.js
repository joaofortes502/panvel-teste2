function pegar(rex, bob, oli) {
  var distRex = rex - oli;
  if (rex < oli) {
    distRex = -rex + oli;
  }

  var distBob = bob - oli;
  if (bob < oli) {
    distBob = -bob + oli;
  }
  if (distBob == distRex) {
    console.log("os cachorros chegaram ao mesmo tempo, oli fugiu");
  }
  if (distBob < distRex) {
    console.log("bob chegou primeiro, bob pegou o gato");
  }
  if (distBob > distRex) {
    console.log("rex chegou primeiro, rex pegou o gato");
  }
}

pegar(5, 5, 8);
