import { Testimonial } from "../../data/shapes";

/**
 * Testimonial Card
 *
 * This component renders a singular card for a testimonial.
 */
export default function TestimonialCard({ testimonial}: { testimonial: Testimonial}) {
    return (
        <div className="card">
            <p dangerouslySetInnerHTML={{ __html: `"${testimonial.testimonial}"` }}></p>
            <div className="authors-box">
                {testimonial.authorIcon && <div className="author-icon" style={{ backgroundImage: `url(${testimonial.authorIcon})` }}></div>}
                <div className="author-info">
                    <h3>{testimonial.authorName ?? ""}</h3>
                    <span>{testimonial.authorPosition ?? ""}</span>
                </div>
            </div>
        </div>
    )
}