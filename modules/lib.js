var sqrt = Math.sqrt;

function square(x) {
  return x * x;
}

function diag(a, b) {
  return (square(a) + square(b));
}

module.exports = {
  sqrt: sqrt,
  square: square,
  diag: diag,
}
