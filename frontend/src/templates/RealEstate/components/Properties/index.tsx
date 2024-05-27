import React, { FC } from 'react';
import styles from './styles.module.scss';
import Card from './Card';
import { IPropertiesProps } from './Card/types';


const Properties: FC<IPropertiesProps> = ({ properties }) => {

  const scrollToForm = () => {
    document.getElementById("callBackRequestForm")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <><div className={styles.properties}>
      {properties.map((property, index) => (
        <Card key={index} {...property} />
      ))}
    </div>
      <button onClick={scrollToForm} className={styles.requestButton}>Request entire catalog</button></>

  );
};

export default Properties;
