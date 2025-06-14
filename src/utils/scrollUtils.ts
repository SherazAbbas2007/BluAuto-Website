
// Cubic Bezier helper
function cubicBezier(p0: number, p1: number, p2: number, p3: number) {
  return function (t: number) {
    const u = 1 - t;
    return (u ** 3) * p0 + 3 * (u ** 2) * t * p1 + 3 * u * (t ** 2) * p2 + (t ** 3) * p3;
  };
}

// Easing function for cubic-bezier(0.65, 0, 0.35, 1)
const ease = cubicBezier(0, 0, 0.65, 1);

// Animate scroll
export function animateScroll(targetY: number, duration = 700, callback?: () => void) {
  const startY = window.scrollY || window.pageYOffset;
  const diff = targetY - startY;
  const startTime = performance.now();

  function scrollStep(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = ease(progress);

    window.scrollTo(0, startY + diff * eased);

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    } else if (callback) {
      callback();
    }
  }

  requestAnimationFrame(scrollStep);
}
