import { ReactNode } from "react";
import "../../styles/components/contact-me-section.scss";
// import ContactForm from "../child-components/ContactForm";

/**
 * Contact Me Section
 *
 * This component renders the contact section to use on any page.
 * It takes in params such as the title, images, and children (which allows you to add any react components inside the 2nd inner container).
 * It has a form component inside to send enquiries to my support email address
 */
export default function ContactMeSection({
  sectionId,
  title,
  children,
}: {
  sectionId?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section id={sectionId ?? ""} className="contact wrapper">
      <div className="container">
        <div className="inner-content">
          <h2 className="heading-text">{title ?? ""}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
