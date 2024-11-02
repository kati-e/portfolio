import { useState } from "react";
import { PortfolioProject } from "../../data/shapes";
import useSlugify from "../hooks/useSlugify";

/**
 * Portfolio Card 
 *
 * This component renders a card displaying the project's information.
 * If the project does not have a 'workingFor' value set (meaning it was a freelance project direct with client), it will simply say 'Freelance Project'.
 * The tech stack will render in a list of little green bubbles and will wrap if there are a lot of them.
 */
export default function PortfolioCard({
  project,
}: {
  project: PortfolioProject;
}) {
  
  const slugify = useSlugify();
  const [cardHover, setCardHover] = useState(false);

  return (
    <div className="card">
      {project.siteUrl && project.siteUrl !== "#" ?
        <div className="img-group" onMouseEnter={() => setCardHover(true)} onMouseLeave={() => setCardHover(false)}>
          <a href={project.siteUrl ?? "#"} target="_blank">
            <div className={`overlay${cardHover ? ' flex' : ' hidden'}`}><span>Visit Site</span></div>
            <img src={project.featuredImage.src ?? ""} alt={project.featuredImage.alt ?? "preview of project"} />
          </a>
        </div>
        :
        <img src={project.featuredImage.src ?? ""} alt={project.featuredImage.alt ?? "preview of project"} />
      }
      <div className="card-content">
        <div className="top-section">
          { project.siteUrl ? (
            <a href={project.siteUrl} target="_blank"><h3 className="smaller-heading-text">{project.title ?? ""}</h3></a>
          ) : (
            <h3 className="smaller-heading-text">{project.title ?? ""}</h3>
          )}
          {project.workingFor ? (
            <span> Working For <a className="inline-link" href={project.workingForLink ?? "#"} target="_blank">{project.workingFor}</a> | {project.dateLaunched ?? ""}</span>
          ) : (
            <span>Freelance Work | {project.dateLaunched ?? ""}</span>
          )}
        </div>
        <p>{project.excerpt ?? ""}</p>
        <a className="inline-link site-link-mobile" href={project.siteUrl ?? "#"} target="_blank">Visit Site</a>
        <div className="bubbles">
          {project.techStack.length > 0 &&
            project.techStack.map((tech) => {
              return <span key={slugify(tech)} className="bubble">{tech}</span>;
            })}
        </div>
      </div>
    </div>
  );
}
