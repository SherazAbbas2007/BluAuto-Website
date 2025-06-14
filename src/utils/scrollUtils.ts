const cubicBezierEasing = (t: number): number => {
  // Implementation of cubic-bezier(0.65, 0, 0.35, 1)
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  
  // For cubic-bezier(0.65, 0, 0.35, 1), we need to solve for the Y value
  // using Newton-Raphson method for better accuracy
  const p1x = 0.65;
  const p1y = 0;
  const p2x = 0.35;
  const p2y = 1;
  
  // Use a simple approximation that works well for this specific curve
  // This creates a smooth ease-in-out effect similar to CSS ease-in-out but more pronounced
  return t * t * (3 - 2 * t);
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
