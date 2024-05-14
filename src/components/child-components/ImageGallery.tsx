import { Image } from "../../data/shapes";
import "../../styles/components/image-gallery.scss";

/**
 * ImageGallery
 *
 * This component renders a row of images to form a simple static gallery.
 * The displayCount param will control how many images from the images array will display in the row.
 * The style of the last image in the row will always be a longer width than the first images (dependant on the displayCount)
 */
export default function ImageGallery({
  displayCount,
  images,
}: {
  displayCount: number;
  images: Image[];
}) {
  return (
    <div className="wrapper">
      <div className="image-gallery container wide">
        {images.length > 0 &&
          images.map((img, index) => {
            return index < displayCount ? (
              <img
                key={img.key}
                className={
                  index === displayCount - 1 ? "long-image" : "small-image"
                }
                src={img.src ?? ""}
                alt={img.alt ?? ""}
                height="500px"
                width="500px"
              />
            ) : null;
          })}
      </div>
    </div>
  );
}
