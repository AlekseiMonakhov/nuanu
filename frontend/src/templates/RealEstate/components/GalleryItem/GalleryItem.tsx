import { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import InfoCard from "../InfoCard/InfoCard";
import { GalleryItemProps } from "./types";


const GalleryItem: FC<GalleryItemProps> = ({ src, title, subtitle, alt }) => (
  <div className={styles.galleryItem}>
    <Image src={src} alt={alt} layout="responsive" width={100} height={50} />
    <InfoCard title={title} subtitle={subtitle} />
  </div>
);

export default GalleryItem;
