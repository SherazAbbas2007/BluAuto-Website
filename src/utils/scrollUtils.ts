
// Simple scroll to top function
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simple scroll to section function
export function scrollToSection(href: string) {
  if (href === '#') {
    scrollToTop();
    return;
  }
  
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
