import Image from '@/shared/components/Image/Image';
import Content from '@/shared/components/Content/Content';
import styles from './Section.module.scss';

export default function Section({
  url,
  heading,
  text,
  button,
  order,
  id,
  handleProduct,
}) {
  return (
    <section className={styles.container}>
      {order % 2 == 0 ? (
        <>
          <Content
            className={styles.container__content}
            heading={heading}
            text={text}
            button={button}
            id={id}
            handleProduct={handleProduct}
          />
          <Image source={url} alt={`${heading} Image`} width={440} height={280} />
        </>
      ) : (
        <>
          <Image source={url} alt={`${heading} Image`} width={440} height={280} />
          <Content
            className={styles.container__content}
            heading={heading}
            text={text}
            button={button}
            id={id}
            handleProduct={handleProduct}
          />
        </>
      )}
    </section>
  );
}
