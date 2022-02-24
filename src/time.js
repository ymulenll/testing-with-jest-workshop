function daysAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const days = Math.floor(seconds / 60 / 60 / 24);

  return `${days} day${days > 1 ? "s" : ""} ago`;
}

module.exports = {
  daysAgo,
};
