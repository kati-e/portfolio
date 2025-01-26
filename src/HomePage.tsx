import AboutSection from "./components/sections/AboutSection";
import HeroBanner from "./components/sections/HeroBanner";
import CardsSection from "./components/sections/CardsSection";
import {
  CONTACT_ME_IMAGES,
  DP_ME,
  EmailAddress,
  FEATURED_IMAGES,
  Github,
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
        subtitle="Software developer & web designer in Sydney, Australia"
        buttons={[
          { text: "View Portfolio", link: "#portfolio" },
          { text: "Connect With Me", link: "#contact" },
        ]}
      />
      <AboutSection
        sectionId="about"
        title="About Me"
        dpImage={DP_ME}
        icons={SOCIAL_LINKS}
        featuredImages={FEATURED_IMAGES}
      >
        <p>
          My name is Katelyn and I'm a software developer & web designer. I completed my Graduate Diploma in IT (Majoring in Computer Science) in early 2023, and am currently working as a software developer at <a className="inline-link" href="https://www.pz.com.au/" target="_blank" aria-label="Patient Zero Brisbane">Patient Zero</a>, as well as offering WordPress freelancing work in my spare time. <br/><br/>If you were interested in seeing some of my design or development work, check out my portfolio projects below, or visit my <a className="inline-link" href={Github} target="_blank">Github</a> to see some personal projects I've been working on.
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
        Want to collaborate or just say 'hi'? I'm always open to meeting new people or discussing opportunities. Feel free to contact me via LinkedIn or email to connect.
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
