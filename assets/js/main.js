function animateValue(id, start, end, duration, suffix = '') {
  const element = document.getElementById(id);
  if (!element) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    element.textContent = current + suffix;
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

function animateShelfLife() {
  const element = document.getElementById('shelfLifeBoost');
  if (!element) return;
  // Step 1: count from 1 to 5 rapidly
  let count = 0;
  const interval = setInterval(() => {
    count++;
    element.textContent = count + 'x';
    if (count >= 5) {
      clearInterval(interval);
      // Step 2: after a short delay, show the range
      setTimeout(() => {
        element.textContent = '2-5x';
      }, 500);
    }
  }, 200); // every 200ms
}

window.addEventListener('load', () => {
  animateValue('productsTreated', 0, 1847, 2000, ' t');
  // shelf life is now custom animated
  animateShelfLife();
  animateValue('wastePrevented', 0, 2300, 2000, ' t');
  animateValue('farmersSupported', 0, 1200, 2000, '+');
});