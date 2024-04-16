import { FC } from "react";
import styles from "./styles.module.scss";
import { GalleryRowProps } from "./types";


const GalleryRow: FC<GalleryRowProps> = ({ children }) => (
  <div className={styles.galleryItemRow}>{children}</div>
);

export default GalleryRow;
