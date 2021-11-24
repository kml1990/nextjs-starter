import React from 'react';
import Image from 'next/image'

import styles from './Content.module.scss';

export interface ContentProps {
  text?: string;
}

const Content: React.FC<ContentProps> = ({ text = 'Simple Text', children }) => (
  <div className={styles.Content}>
      <Image src="/vercel.svg" className={styles.logo} alt="Vercel Logo" width={72} height={16} />
    <h1>
      {`CRA Starter - ${text}`}
    </h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, porro!</p>
    {children}
  </div>
);

export default Content;
