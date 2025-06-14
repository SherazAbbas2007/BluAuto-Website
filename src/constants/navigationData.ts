
export const navItems = [
  { name: 'Our Process', href: '#process' },
  { name: 'Use Cases', href: '#usecases' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
];

export const isActive = (href: string, activeSection: string) => {
  const sectionId = href.replace('#', '');
  return activeSection === sectionId;
};
