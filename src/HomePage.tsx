import AboutSection from "./components/sections/AboutSection";
import HeroBanner from "./components/sections/HeroBanner";
import CardsSection from "./components/sections/CardsSection";
import {
  CONTACT_ME_IMAGES,
  EmailAddress,
  FEATURED_IMAGES,
  PORTFOLIO_PROJECTS,
  SOCIAL_LINKS,
  TECHNICAL_SPECIALISATIONS,
  TESTIMONIALS,
} from "./data/consts";
import PortfolioSection from "./components/sections/PortfolioSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import "./styles/pages/home-page.scss";
import ContactMeSection from "./components/sections/ContactMeSection";
import IconsGroup from "./components/child-components/IconsGroup";

export default function HomePage() {
  return (
    <>
      <HeroBanner
        sectionId="hero"
        title="Designing Solutions for Your Business"
        subtitle="Web designer & developer specialising in WordPress & React Web Development"
        buttons={[
          { text: "View Portfolio", link: "#portfolio" },
          { text: "Connect With Me", link: "#contact" },
        ]}
      />
      <AboutSection
        sectionId="about"
        title="About Me"
        icons={SOCIAL_LINKS}
        featuredImages={FEATURED_IMAGES}
      >
        <p>
          My name is Katelyn and I'm a web developer & designer specialising in
          WordPress, React, Javascript, Typescript, and HTML/CSS. I completed my
          Graduate Diploma in IT (Majoring in Computer Science) early 2023 and
          am currently working as a freelancer available for web projects
          Australia-wide.
        </p>
      </AboutSection>
      <CardsSection
        sectionId="skills"
        title="Skills & Experience"
        cards={TECHNICAL_SPECIALISATIONS}
        columns={3}
      />
      <PortfolioSection
        sectionId="portfolio"
        title={"Past Work"}
        projects={PORTFOLIO_PROJECTS}
      />
      <TestimonialSection
        title={"Testimonials"}
        sectionId="testimonials"
        testimonials={TESTIMONIALS}
      />
      <ContactMeSection
        sectionId="contact"
        title={"Let's Connect"}
        images={CONTACT_ME_IMAGES}
      >
        <p>
          My name is Katelyn and I'm a web developer & designer specialising in
          WordPress, React.js, PHP, Javascript, Typescript, and HTML/CSS.
        </p>
        {EmailAddress && (
          <span>
            <strong>Email: </strong>
            <a className="inline-link" href={`mailto:${EmailAddress}`}>{EmailAddress}</a>
          </span>
        )}
        <IconsGroup icons={SOCIAL_LINKS} />
      </ContactMeSection>
    </>
  );
}