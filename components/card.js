// Import nextjs component
import Link from "next/link";

// Import custom component
import FeaturedImage from "./featuredImage";

const Card = ({ title, image, slug }) => {
  return (
    <div>
      {image && <FeaturedImage imageData={image} />}
      <h3>
        <Link href={`titles/${slug}`}>
          <a>{title}</a>
        </Link>
      </h3>
    </div>
  );
};

// Export Card
export default Card;
