
import BezierEasing from 'bezier-easing';

// Create cubic-bezier easing function
const ease = BezierEasing(0.65, 0, 0.35, 1);

// Custom animate scroll function using cubic-bezier easing
function animateScroll(targetY: number, duration = 800, callback?: () => void) {
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

// Custom scroll to top function
export function scrollToTop() {
  animateScroll(0);
}

// Custom scroll to section function
export function scrollToSection(href: string) {
  if (href === '#') {
    scrollToTop();
    return;
  }
  
  const element = document.querySelector(href);
  if (element) {
    const top = (element as HTMLElement).getBoundingClientRect().top + window.scrollY;
    animateScroll(top);
  }
}
