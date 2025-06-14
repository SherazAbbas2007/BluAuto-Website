
import BezierEasing from 'bezier-easing';

// Easing function for cubic-bezier(0.65, 0, 0.35, 1)
const ease = BezierEasing(0.65, 0, 0.35, 1);

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
