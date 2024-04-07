import { FC } from "react";
import styles from "./styles.module.scss";
import galleryImage1 from "../../assets/images/1_gallery/1-gallery-section.png";
import galleryImage2 from "../../assets/images/1_gallery/2-gallery-section.png";
import galleryImage3 from "../../assets/images/1_gallery/3-gallery-section.png";
import galleryImage4 from "../../assets/images/1_gallery/4-gallery-section.png";
import galleryImage5 from "../../assets/images/1_gallery/5-gallery-section.png";
import galleryImage6 from "../../assets/images/1_gallery/6-gallery-section.png";
import GalleryItem from "../GalleryItem/GalleryItem";
import GalleryRow from "../GalleryRow/GalleryRow";

const Gallery: FC = () => (
  <div className={styles.gallery}>
  <div className={styles.captionBoxContainer}>
    <div className={styles.captionBox}>Nuanu is a place of the future on the map of Bali</div>
  </div>
    <GalleryItem
      src={galleryImage1}
      alt="Gallery image 1"
      title="Nuanu is Bali's major infrastructure projects highlight"
      subtitle="That will attract 5,000 tourists a day"
      isNotRounded
    />
    <GalleryRow>
      <GalleryItem
        src={galleryImage2}
        alt="Gallery image 2"
        title="Networking with visionaries and entrepreneurs"
        subtitle="Bali's major infrastructure projects highlight, for the price of an apartment"
        isHalfWidth
      />
      <GalleryItem
        src={galleryImage3}
        alt="Gallery image 3"
        title="Full access to life and creativity of Nuanu City"
        subtitle="Bali's major infrastructure projects highlight, for the price of an apartment"
        isHalfWidth
      />
    </GalleryRow>
    <GalleryItem
      src={galleryImage4}
      alt="Gallery image 4"
      title="Nuanu is Bali's major infrastructure projects highlight"
      subtitle="That will attract 5,000 tourists a day"
    />
    <GalleryRow>
      <GalleryItem
        src={galleryImage5}
        alt="Gallery image 5"
        title="Networking with visionaries and entrepreneurs"
        subtitle="Bali's major infrastructure projects highlight, for the price of an apartment"
        isHalfWidth
      />
      <GalleryItem
        src={galleryImage6}
        alt="Gallery image 6"
        title="Full access to life and creativity of Nuanu City"
        subtitle="Bali's major infrastructure projects highlight, for the price of an apartment"
        isHalfWidth
      />
    </GalleryRow>
  </div>
);

export default Gallery;
