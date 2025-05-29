
import { useInView as useInViewBase } from 'react-intersection-observer';

export const useInView = (options = {}) => {
  return useInViewBase({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });
};
