var scrollTimeout: NodeJS.Timeout;
let isScrolling = false;

addEventListener("scroll", () => {
  isScrolling = true;
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => (isScrolling = false), 100);
});

const checkIfScrolling = () => {
  return isScrolling;
};

export default checkIfScrolling;
