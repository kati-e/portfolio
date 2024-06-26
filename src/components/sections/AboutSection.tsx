import { ReactNode } from "react";
import { Icon, Image } from "../../data/shapes";
import IconsGroup from "../child-components/IconsGroup";
import "../../styles/components/about-section.scss";
import ImageGallery from "../child-components/ImageGallery";

/**
 * About Section
 *
 * This component renders an about & bio section to use on any page.
 * It takes in params such as the title, icons, featuredImages, and children (which allows you to add any react components inside the 2nd inner container).
 * It has a featured gallery component which displays 3 featured images
 */
export default function AboutSection({
  sectionId,
  title,
  dpImage,
  icons,
  featuredImages,
  children,
}: {
  sectionId?: string;
  title: string;
  dpImage?: Image;
  icons: Icon[];
  featuredImages: Image[];
  children: ReactNode;
}) {
  return (
    <>
      <section id={sectionId ?? ""} className="about wrapper">
        <div className="container">
          <div className="heading-content">
            {dpImage && <div className="dp-image">
              <img src={dpImage.src} alt={dpImage.alt} height="130px" width="130px" />
            </div>}
            <h2 className="heading-text">{title ?? ""}</h2>
            <IconsGroup icons={icons} />
          </div>
          <div className="bio-content">{children}</div>
        </div>
      </section>
      {/* No images available just yet, need to take some original ones, leaving this out and just using some temp spacing with br elements for now */}
      <br />
      <br />
      {featuredImages.length > 0 && <ImageGallery displayCount={3} images={featuredImages} />}
    </>
  );
}
