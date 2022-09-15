module.exports = function sortByOrder(values) {
  return [...values].sort((a, b) => Math.sign(a.data.order - b.data.order));
};
