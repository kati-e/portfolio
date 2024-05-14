import { ReactNode } from "react";
import { Image } from "../../data/shapes";
import '../../styles/components/contact-me-section.scss'
// import ContactForm from "../child-components/ContactForm";

/**
 * Contact Me Section
 *
 * This component renders the contact section to use on any page.
 * It takes in params such as the title, images, and children (which allows you to add any react components inside the 2nd inner container).
 * It has a form component inside to send enquiries to my support email address
 */
export default function ContactMeSection({sectionId, title, images, children} : {sectionId?: string, title: string, images: Image[], children?: ReactNode}) {
    return (
        <section id={sectionId ?? ""} className="contact wrapper">
            <div className="container">
                <div className="inner-content">
                    <h2 className="heading-text">{title ?? ""}</h2>
                    {children}
                    <div className="images">
                        {images.length > 0 && images.map(img => {
                            return <img key={img.key} src={img.src} alt={img.alt} height="500" width="500" />
                        })}
                    </div>
                </div>
                {/* Endpoint for sending email not yet implemented hence why this is hidden */}
                {/* <ContactForm /> */}
            </div>
        </section>
    )
}