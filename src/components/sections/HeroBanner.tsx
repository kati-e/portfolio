import { Button } from "../../data/shapes";
import '../../styles/components/hero-banner.scss'
import useSlugify from "../hooks/useSlugify";

/**
 * Hero Banner
 *
 * This component renders a hero banner to use for the top of any page.
 * It takes in params such as the title, subtitle, and buttons.
 * If the buttons array has more than 1 button, it will style the rest of the buttons with the outlined styling
 */
export default function HeroBanner({
    sectionId,
    title,
    subtitle,
    buttons,
}: {
    sectionId?: string;
    title: string;
    subtitle: string;
    buttons: Button[];
}) {

    const slugify = useSlugify();
    
    return (
        <section id={sectionId ?? ""} className="hero-banner wrapper">
            <div className="container">
                <div className="inner-content">
                    <h1 className="hero-text">{title ?? ""}</h1>
                    <p className="subtitle-text">{subtitle ?? ""}</p>
                </div>
                {buttons.length > 0 && (<div className="button-group">
                    {buttons.map((btn, index) => {
                        return (
                            <a className={index > 0 ? "button outlined" : "button"} key={slugify(btn.text)} href={btn.link ?? "#"}>{btn.text ?? ""}</a>
                        );
                    })}
                </div>)}
            </div>
        </section>
    );
}
