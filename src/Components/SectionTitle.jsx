/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: SectionTitle.jsx
   Version: I
   Creation: 18/10/2024
   Last modification: 18/10/2024
*/

import { m, LazyMotion, domAnimation } from 'framer-motion';

function SectionTitle(props) {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="text-primary-400 p-6 noselect"
      >
        <span
          className="opacity-50"
          style={{
            textTransform: 'uppercase',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '600',
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-7xl sm:text-8xl md:text-9xl"
          style={{ fontFamily: 'Morganite Black' }}
        >
          {title.split('').map((char, index) => {
            if (char === ' ') {
              return ' ';
            }
            return <span key={index} className="bounce">{char}</span>
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
}

export default SectionTitle;
