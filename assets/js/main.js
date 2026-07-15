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

window.addEventListener('load', () => {
  animateValue('productsTreated', 0, 1847, 2000, ' t');
  animateValue('shelfLifeBoost', 0, 47, 1500, ' days');
  animateValue('wastePrevented', 0, 2300, 2000, ' t');
  // Farmers supported is static (1,200+)
});