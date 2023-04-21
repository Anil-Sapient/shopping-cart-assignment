import styles from "./Image.module.scss";
import * as NextImage from "next/image";

export default function Image({ source, alt, className = "", ...rest }) {
  const sourceArray = source.split("/");
  sourceArray.shift();
  const path = sourceArray.join("/");
  return (
    <NextImage
      src={`/${path}`}
      className={className ? className : styles.image_wrapper}
      alt={alt}
      responsive
      {...rest}
    />
  );
}
