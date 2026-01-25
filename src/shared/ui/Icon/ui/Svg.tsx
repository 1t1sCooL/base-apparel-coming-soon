import { type ButtonHTMLAttributes } from 'react';

import styles from './Svg.module.css';

type SvgProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Svg = (props: SvgProps) => {
  return (
    <button className={styles.svg} type="submit" aria-label="Submit email" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 20">
        <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 1l8.836 8.836L1 18.671" />
      </svg>
    </button>
  );
};
