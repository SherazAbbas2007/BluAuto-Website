
const cubicBezierEasing = (t: number): number => {
  // Implementation of cubic-bezier(0.65, 0, 0.35, 1)
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  
  // Direct calculation for cubic-bezier(0.65, 0, 0.35, 1)
  // This creates a smooth ease-in-out effect
  const c1 = 0.65;
  const c2 = 0;
  const c3 = 0.35;
  const c4 = 1;
  
  // Calculate using the standard cubic bezier formula
  const oneMinusT = 1 - t;
  const tSquared = t * t;
  const tCubed = tSquared * t;
  const oneMinusTSquared = oneMinusT * oneMinusT;
  const oneMinusTCubed = oneMinusTSquared * oneMinusT;
  
  return (
    3 * oneMinusTSquared * t * c2 +
    3 * oneMinusT * tSquared * c4 +
    tCubed
  );
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
