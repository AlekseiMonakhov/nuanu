import { FC, memo } from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { IProps } from './types';
import styles from './styles.module.scss';

import 'swiper/css';
import { Slide } from './Slide';

const Component: FC<IProps> = ({ className, style, title, items }) => (
  <section className={cn(className, styles.home_person_types)} style={style}>
    <div className={styles.aside}>
      {title && (
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
    </div>

    {items && items.length > 0 && (
      <Swiper
        className={styles.main}
        modules={[A11y]}
        slidesPerView="auto"
        spaceBetween={0}
        speed={600}
      >
        {items.map(({ key, ...item }) => (
          <SwiperSlide key={key} className={styles.slide}>
            <Slide key={key} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    )}
  </section>
);

export const HomePersonTypes = memo(Component);
