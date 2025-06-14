

// Approximate "easeInOutSine"
function easeInOutSine(t: number) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

// Animate scroll
export function animateScroll(targetY: number, duration = 700, callback?: () => void) {
  const startY = window.scrollY || window.pageYOffset;
  const diff = targetY - startY;
  const startTime = performance.now();

  function scrollStep(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutSine(progress);

    window.scrollTo(0, startY + diff * eased);

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    } else if (callback) {
      callback();
    }
  }

  requestAnimationFrame(scrollStep);
}

