import AboutSection from "../components/sections/AboutSection";
import HeroBanner from "../components/sections/HeroBanner";
import CardsSection from "../components/sections/CardsSection";
import {
  DP_ME,
  Github,
  PORTFOLIO_PROJECTS,
  SOCIAL_LINKS,
  TECHNICAL_SPECIALISATIONS,
  TESTIMONIALS,
} from "../data/consts";
import PortfolioSection from "../components/sections/PortfolioSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import "../styles/pages/home-page.scss";
import ContactMeSection from "../components/sections/ContactMeSection";
import IconsGroup from "../components/child-components/IconsGroup";
import InlineLink from "../components/child-components/InlineLink";

export default function HomePage() {
  return (
    <>
      <HeroBanner
        sectionId="hero"
        title="Software Developer in Sydney Australia"
        subtitle="Creating and developing solutions for your business."
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
      >
        <p>
          My name is Katelyn and I'm a full stack software developer based in
          Sydney, Australia. I completed my Graduate Diploma in IT (Majoring in
          Computer Science) in early 2023, and have 4 years experience working
          in the industry. I am currently working as a software developer at
          <InlineLink
            href="https://www.pz.com.au/"
            text="Patient Zero"
            ariaLabel="Patient Zero Brisbane"
          />
          .
          <br />
          <br />
          If you were interested in seeing some of my design or development
          work, check out my portfolio projects below, or visit my
          <InlineLink href={Github} text="Github" />
          to see any personal projects I've been working on.
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
      <ContactMeSection sectionId="contact" title={"Let's Connect"}>
        <p>
          Want to collaborate or just say 'hi'? I'm always open to meeting new
          people or discussing opportunities. Feel free to contact me via
          LinkedIn to connect.
        </p>
        <IconsGroup icons={SOCIAL_LINKS} />
      </ContactMeSection>
    </>
  );
}
