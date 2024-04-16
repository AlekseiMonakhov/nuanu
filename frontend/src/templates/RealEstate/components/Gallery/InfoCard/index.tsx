import { FC } from "react";
import styles from "./styles.module.scss";
import { InfoCardProps } from "./types";


const InfoCard: FC<InfoCardProps> = ({ title, subtitle }) => (
  <div className={styles.infoCard}>
    <h2 className={styles.infoCardTitle}>{title}</h2>
    <p className={styles.infoCardSubtitle}>{subtitle}</p>
  </div>
);

export default InfoCard;
