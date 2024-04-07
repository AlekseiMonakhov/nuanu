import { FC } from "react";
import styles from "./styles.module.scss";
import galleryImage1 from "../../assets/images/1_gallery/1-gallery-section.png";
import galleryImage2 from "../../assets/images/1_gallery/2-gallery-section.png";
import galleryImage3 from "../../assets/images/1_gallery/3-gallery-section.png";
import galleryImage4 from "../../assets/images/1_gallery/4-gallery-section.png";
import galleryImage5 from "../../assets/images/1_gallery/5-gallery-section.png";
import galleryImage6 from "../../assets/images/1_gallery/6-gallery-section.png";
import GalleryItem from "./GalleryItem";
import GalleryRow from "./GalleryRow";

const Gallery: FC = () => (
  <div className={styles.gallery}>
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
      title="Installment plans and share buying for every budget"
      subtitle="Bali's major infrastructure projects highlight, for the price of an apartment"
    />
    <GalleryRow>
      <GalleryItem
        src={galleryImage5}
        alt="Gallery image 5"
        title="Legal assistance: from contracts to residency"
        subtitle="Bali's major infrastructure projects highlight, for the price of an apartment"
        isHalfWidth
      />
      <GalleryItem
        src={galleryImage6}
        alt="Gallery image 6"
        title="Concierge service 24/7 for your peace of mind"
        subtitle="Bali's major infrastructure projects highlight, for the price of an apartment"
        isHalfWidth
      />
    </GalleryRow>
  </div>
);

export default Gallery;
