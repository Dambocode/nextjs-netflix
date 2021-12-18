// Import nextjs component
import Image from "next/image";

// Import npm package
import classNames from "classnames/bind";

// Import Styles
import styles from "./wordpressimage.module.scss";

let cx = classNames.bind(styles);

const WordpressImage = ({ data, rounded }) => {
  const { sourceUrl, mediaDetails, altText } = data;
  const { width, height } = mediaDetails;

  let imageClasses = cx({
    responsive_img: true,
    rounded: rounded,
  });

  return (
    <Image
      src={sourceUrl}
      width={width}
      height={height}
      altText={altText}
      layout="responsive"
      className={imageClasses}
    />
  );
};
export default WordpressImage;
