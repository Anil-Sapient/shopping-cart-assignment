import { useState } from 'react';
import ImageData from '../../../../../server/banners/index.get.json';
import Button from '@/shared/components/Button/Button';
import Image from '@/shared/components/Image/Image';
import styles from './Carousel.module.scss';

export default function Carousel() {
  const [current, setCurrent] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const length = ImageData.length;

  const handleSlide = (slideOrder) => {
    setCurrent(slideOrder);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchEnd && touchStart - touchEnd > 15) {
      handleSlide(current === length ? 1 : current + 1);
    }

    if (touchEnd && touchStart - touchEnd < -15) {
      handleSlide(current === 1 ? length : current - 1);
    }
  };

  return (
    <section className={styles.carousel}>
      <div className={styles.carousel__container}>
        {ImageData.map((data) => (
          <div
            key={data.id}
            className={
              data.order === current
                ? `${styles.carousel__container__slide} ${styles.active}`
                : styles.carousel__container__slide
            }
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {data.order === current && (
              <Image
                source={data.bannerImageUrl}
                alt={data.bannerImageAlt}
                className={styles.carousel__container__slide__image}
                width={1200}
                height={300}
              />
            )}
          </div>
        ))}
      </div>
      <button
        className={styles.carousel__left_button}
        onClick={() => handleSlide(current === 1 ? length : current - 1)}
      >
        Prev
      </button>
      <button
        className={styles.carousel__right_button}
        onClick={() => handleSlide(current === length ? 1 : current + 1)}
      >
        Next
      </button>
      <div className={styles.carousel__nav}>
        {ImageData.map((data) => (
          <Button
            key={data.id}
            className={
              data.order === current
                ? `${styles.carousel__nav__dots} ${styles.dots_active}`
                : styles.carousel__nav__dots
            }
            onClick={() => handleSlide(data.order)}
            aria-label={data.bannerImageAlt}
          ></Button>
        ))}
      </div>
    </section>
  );
}
