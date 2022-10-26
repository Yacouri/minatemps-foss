import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const variants = {
  visible: { opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0 }
};

const withAnimation = (WrappedComponent) => {
  return function animatedBox() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start('visible');
      }
    }, [control, inView]);

    return (
      <motion.div className="box" ref={ref} variants={variants} initial="hidden" animate={control}>
        <WrappedComponent />
      </motion.div>
    );
  };
};

export default withAnimation;
