import { Testimonial } from '../../data/shapes'
import '../../styles/components/testimonial-section.scss'
import TestimonialCard from '../child-components/TestimonialCard'
import useSlugify from '../hooks/useSlugify';

/**
 * Testimonials Section
 *
 * This component renders a featured testimonials section to use on any page.
 * It takes in params such as the title, and the testimonials array.
 * The projects will render in 2 columns on desktop and 1 on mobile.
 */
export default function TestimonialSection({ title, sectionId, testimonials }: { title: string, sectionId?: string, testimonials: Testimonial[] }) {

    const slugify = useSlugify();

    return (
        <section id={sectionId ?? ""} className="testimonials wrapper">
            <div className="container">
                <h2 className="heading-text">{title ?? ""}</h2>
                <div className="testimonial-cards">
                    {testimonials.length > 0 &&
                        testimonials.map(testimonial => {
                            return <TestimonialCard key={slugify(testimonial.authorName)} testimonial={testimonial} />
                        })}
                </div>
            </div>
        </section>
    )
}