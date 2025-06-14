
export const scrollToSection = (href: string, onComplete?: () => void) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    if (onComplete) onComplete();
  } else if (onComplete) {
    onComplete();
  }
};

export const scrollToTop = (onComplete?: () => void) => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
  });
  if (onComplete) onComplete();
};
