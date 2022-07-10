import React from 'react';

export const Arrow = ({ styles }) => (
  <svg className={styles['arrow-svg']} height="16">
    <path
      className={styles['arrow-path']}
      d="M35.5 1L42.5 8M42.5 8L35.5 15M42.5 8H1"
      stroke="#635E5D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SliderArrow = ({ styles }) => (
  <svg className={styles['slider-arrow-svg']} width="9" height="16" fill="none">
    <path
      className={styles['slider-arrow-path']}
      d="M1 1L8 8L1 15"
      stroke="#3B2F2E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
