import React from 'react';
import styles from './VlogAccordion.module.css'; // Updated import statement
import image1 from './Images/LanaThumbnail.jpg'; //



const VlogAccordion = () => {
  return (
    <main className={styles.main}>
      <ul className={styles.accordion}>
        <li className={styles.item}><img src={{image1}} alt="d" /></li>
        <li className={styles.item}><img src={{image1}} alt="s" /></li>
        <li className={styles.item}><img src={{image1}} alt="" /></li>
        <li className={styles.item}><img src={{image1}} alt="" /></li>
        <li className={styles.item}><img src={{image1}} alt="" /></li>
        <li className={styles.item}>< img src={{image1}} alt="" /></li>
      </ul>
    </main>
  );
};

export default VlogAccordion;
