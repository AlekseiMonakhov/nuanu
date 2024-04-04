import { FC, memo, useState } from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import { IProps } from './types';
import styles from './styles.module.scss';

import 'swiper/css';
import { Slide } from './Slide';
import { Arrows } from './Arrows';

const Component: FC<IProps> = ({ className, style, title, items }) => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  return (
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
          onInit={setSwiper}
          modules={[A11y]}
          slidesPerView="auto"
          spaceBetween={0}
          speed={600}
          onSlideChange={({ isEnd, isBeginning }) => {
            setIsPrevDisabled(isBeginning);
            setIsNextDisabled(isEnd);
          }}
        >
          {items.map(({ key, ...item }) => (
            <SwiperSlide key={key} className={styles.slide}>
              <Slide key={key} {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <Arrows
        className={styles.arrows}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
        onPrevClick={() => swiper?.slidePrev()}
        onNextClick={() => swiper?.slideNext()}
      />
    </section>
  );
};

Component.displayName = 'HomePersonTypes';

export const HomePersonTypes = memo(Component);
