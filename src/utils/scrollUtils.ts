

const cubicBezierEasing = (t: number): number => {
  // Implementation of cubic-bezier(0.65, 0, 0.35, 1)
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  
  // Binary search for accurate cubic bezier calculation
  let start = 0;
  let end = 1;
  let mid = t;
  
  for (let i = 0; i < 10; i++) {
    const x = 3 * (1 - mid) * (1 - mid) * mid * 0.65 + 3 * (1 - mid) * mid * mid * 0.35 + mid * mid * mid;
    if (Math.abs(x - t) < 0.001) break;
    if (x < t) start = mid;
    else end = mid;
    mid = (start + end) / 2;
  }
  
  return 3 * (1 - mid) * (1 - mid) * mid * 0 + 3 * (1 - mid) * mid * mid * 1 + mid * mid * mid;
};

export const scrollToSection = (href: string, onComplete?: () => void) => {
  const element = document.querySelector(href);
  if (element) {
    const targetPosition = (element as HTMLElement).offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    
    const duration = 700; // 700ms to match your CSS duration
    const startTime = performance.now();
    
    function scroll() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = cubicBezierEasing(progress);
      
      window.scrollTo(0, startPosition + distance * easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(scroll);
      } else if (onComplete) {
        onComplete();
      }
    }
    
    requestAnimationFrame(scroll);
  } else if (onComplete) {
    onComplete();
  }
};

export const scrollToTop = (onComplete?: () => void) => {
  const startPosition = window.scrollY;
  const duration = 700; // 700ms to match your CSS duration
  const startTime = performance.now();
  
  function scroll() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = cubicBezierEasing(progress);
    
    window.scrollTo(0, startPosition * (1 - easeProgress));
    
    if (progress < 1) {
      requestAnimationFrame(scroll);
    } else if (onComplete) {
      onComplete();
    }
  }
  
  requestAnimationFrame(scroll);
};

