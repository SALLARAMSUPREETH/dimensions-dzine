import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScaleBounce = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.2 
  });

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.34, 1.56, 0.64, 1], // Spring-like bounce
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

export default ScaleBounce;
