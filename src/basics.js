function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("sum requires 2 numbers");
  }
  return a + b;
}


module.exports = {
  sum,
};
