import { TextCard } from "../../data/shapes";
import '../../styles/components/cards-section.scss';
import useSlugify from "../hooks/useSlugify";

/**
 * Cards Grid Section
 *
 * This component renders a grid of text cards with a dotted outline.
 * It takes in params such as the title, array of cards, and how many columns you want to show on desktop.
 * It will only allow up to 3 columns on desktop to keep the design user-friendly (if you put in another number it will still style as 3 columns).
 * On medium screens it will always show 2 columns, and on mobile always 1 column.
 */
export default function CardsSection({
  sectionId,
  title,
  cards,
  columns,
}: {
  sectionId?: string;
  title: string;
  cards: TextCard[];
  columns: number;
}) {

  const slugify = useSlugify();
  
  return (
    <section id={sectionId ?? ""} className={`${sectionId && sectionId + " "}wrapper`}>
      <div className="cards-top-section container">
        <h2 className="heading-text">{title}</h2>
      </div>
      <div className={`cards-grid container ${columns >= 3 ? "md:grid-cols-3" : columns === 2 ? "md:grid-cols-2" : ""}`}>
        {cards.length > 0 && (
            cards.map((card) => {
                return (
                    <div key={slugify(card.title)} className="card">
                        <h3>{card.title ?? ""}</h3>
                        <p>{card.description ?? ""}</p>
                    </div>
                )
            })
        )}
      </div>
    </section>
  );
}
