import PortfolioCard from "../child-components/PortfolioCard";
import "../../styles/components/portfolio-section.scss";
import { PortfolioProject } from "../../data/shapes";
import { useState } from "react";
import useSlugify from "../hooks/useSlugify";

/**
 * Portfolio Section
 *
 * This component renders featured projects section to use on any page.
 * It takes in params such as the title, and the projects array.
 * The projects will render in 2 columns on desktop and 1 on mobile.
 */
export default function PortfolioSection({
  sectionId,
  title,
  projects,
}: {
  sectionId?: string;
  title: string;
  projects: PortfolioProject[];
}) {

  const slugify = useSlugify();
  const [projectCount, setProjectCount] = useState(projects.length < 4 ? projects.length : 4)
  const doSeeLess = projectCount >= projects.length && projects.length >= 4;
  const doSeeMore = projectCount < projects.length && projects.length >= 4;

  return (
    <section id={sectionId ?? ""} className="portfolio wrapper">
      <div className="container">
        <h2 className="heading-text">{title ?? ""}</h2>
        <div className="portfolio-cards">
          {projects.length > 0 &&
            projects.map((project, index) => {
              return index < projectCount ? <PortfolioCard key={slugify(project.title)} project={project} /> : null;
            })}
        </div>
        {doSeeMore && <button className="button cursor-pointer" onClick={() => {setProjectCount(projectCount + 2)}}>See More Projects</button>}
        {doSeeLess && <a href="#portfolio" className="button" onClick={() => {setProjectCount(4)}}>See Less Projects</a>}
      </div>
    </section>
  );
}
