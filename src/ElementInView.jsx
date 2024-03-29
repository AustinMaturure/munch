// useElementInView.js
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const useElementInView = (querySelector) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const elements = document.querySelectorAll(querySelector);
      elements.forEach((element) => {
        element.style.opacity = 1;
        
        element.style.animationPlayState = 'running';
      });
    }
  }, [inView, querySelector]);

  return ref;
};

export default useElementInView;
