import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollFadeIn = ({ children, delay = 0, direction = 'up', duration = 0.6, threshold = 0.1 }) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold,
    rootMargin: '50px 0px'
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
