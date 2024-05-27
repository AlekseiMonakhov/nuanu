import { FC } from "react";
import styles from "./styles.module.scss";
import GalleryItem from "./GalleryItem";
import GalleryRow from "./GalleryRow";
import IGalleryProps from "./types";


const Gallery: FC<IGalleryProps> = ({ items }) => {
  const renderItems = () => {
    const elements = [];

    for (let i = 0; i < items.length; i++) {
      if (i % 3 === 0) {
        elements.push(
          <GalleryItem
            key={i}
            src={items[i].src}
            alt={`Gallery image ${i + 1}`}
            title={items[i].title}
            subtitle={items[i].subtitle}
            isNotRounded={i === 0}
          />
        );
      } else if (i % 3 === 1) {
        elements.push(
          <GalleryRow key={`row-${i}`}>
            <GalleryItem
              src={items[i].src}
              alt={`Gallery image ${i + 1}`}
              title={items[i].title}
              subtitle={items[i].subtitle}
              isHalfWidth
            />
            {items[i + 1] && (
              <GalleryItem
                src={items[i + 1].src}
                alt={`Gallery image ${i + 2}`}
                title={items[i + 1].title}
                subtitle={items[i + 1].subtitle}
                isHalfWidth
              />
            )}
          </GalleryRow>
        );
        i++;
      }
    }

    return elements;
  };

  return <div className={styles.gallery}>{renderItems()}</div>;
};

export default Gallery;
