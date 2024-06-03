import { PortfolioProject, Testimonial, Icon, Image, TextCard, Link } from "./shapes";

export const LinkedIn: string = 'https://www.linkedin.com/in/katelyncleary/'
export const Github: string = 'https://github.com/kati-e/'
export const EmailAddress: string = 'support@klcleary.com'
export const DP_ME: Image = {src: '/me.jpg', alt: "Photo of me in Japan with some bamboo in the background"}

//NAVBAR
export const NAV_MENU: Link[] = [
    {
        key: 1,
        link: "/#about",
        text: "About Me"
    },
    // {
    //     key: 2,
    //     link: "/#portfolio",
    //     text: "Projects"
    // },
    {
        key: 3,
        link: "/#testimonials",
        text: "Testimonials"
    },
    {
        key: 4,
        link: "/#contact",
        text: "Contact"
    },
]

//SOCIALS
export const SOCIAL_LINKS: Icon[] = [
    {
        key: "github",
        link: Github,
        icon: { key: "social-1", src: '/github.svg', alt: 'Github' },
        newTab: true
    },
    {
        key: "linkedin",
        link: LinkedIn,
        icon: { key: "social-2", src: '/linkedin.svg', alt: 'LinkedIn' },
        newTab: true
    }
]

//PHOTOGRAPHY
export const FEATURED_IMAGES: Image[] = [
    // {
    //     key: "featured-1",
    //     src: "",
    //     alt: ""
    // },
    // {
    //     key: "featured-2",
    //     src: "",
    //     alt: ""
    // },
    // {
    //     key: "featured-3",
    //     src: "",
    //     alt: ""
    // }
]

export const CONTACT_ME_IMAGES: Image[] = [
    // {
    //     key: "contact-1",
    //     src: "",
    //     alt: ""
    // },
    // {
    //     key: "contact-2",
    //     src: "",
    //     alt: ""
    // }
]

//SKILLS
export const TECHNICAL_SPECIALISATIONS: TextCard[] = [
    {
        title: 'Knowledge of Fundamentals',
        description: 'A strong understanding of web development fundamentals (HTML & CSS, Javascript, APIs), and how a website is built.'
    },
    {
        title: 'WordPress Web Development',
        description: 'Experience building custom WordPress websites, shortcodes, and plugins, as well as extensive experience with Elementor.'
    },
    {
        title: 'React Web Development',
        description: 'Experience working on agile react team projects working through stories & sprints lead by a team lead / scrum master.'
    },
    {
        title: 'Google Tag Manager & GA4',
        description: 'Advanced knowledge of setup & configuration of GTM & GA4 custom conversion events to assist Google Ads campaign efforts.'
    },
    {
        title: 'Web & Digital Design',
        description: 'Experienced in both digital graphic design & UI design, I love crafting bespoke website designs & prototypes in Figma.'
    },
    {
        title: 'Security, Accessability, & QA',
        description: 'Security, accessability, and creating an all-round well made website are at the top of my mind throughout any web project.'
    },
]

//TESTIMONIALS
export const TESTIMONIALS: Testimonial[] = [
    {
        testimonial: 'Katelyn is an asset to any team she works with! I have had the pleasure of working with her on over 40+ projects and have seen first hand her exceptional contributions as a Web Developer at Digital8. Specialising in WordPress and React Web Development, she consistently delivers high-quality work, meets deadlines, solves complex problems and builds lasting client relationships (...) She is not only a technically skilled professional but also an organised, efficient, and open-to-challenges team player.',
        authorName: 'Annaliese Jauch',
        authorPosition: 'Head of Project Delivery at Digital8 (Former)',
        authorIcon: '/testimonials/annaliese.jpeg',
    },
    {
        testimonial: 'I highly recommend Katelyn for her amazing developer and designer skills. She does an amazing job on all projects. Not only does she meet the deadlines and requirements, she also helps build long-term relationships with clients.<br><br>I have the privilege of working with her on several projects and she is an absolutely pleasure to work with. Katelyn\'s dedication to ensuring high quality work and great results for clients is remarkable.',
        authorName: 'Luc Van der Vulgt',
        authorPosition: 'Project Account Manager at Digital8 (Former)',
        authorIcon: '/testimonials/luc.jpeg'
    },
    {
        testimonial: 'Katelyn is a breath of fresh air to work with. Always organised, efficient and open to taking on new challenges, working with Katelyn at Digital8 has been an absolute pleasure. Her website design/development skills are second to none and continuously exceed client expectations. Working on the same team, I\'m not sure how we would function without her!',
        authorName: 'Freja Daniels-Gillen',
        authorPosition: 'Social & PPC Lead at Digital8',
        authorIcon: '/testimonials/freja.jpeg'
    },
    {
        testimonial: 'I worked with Katelyn for 9 months at Digital8 and I would highly recommend her for any development work. Her skills are second to none when it comes to development and she passed along some of her knowledge to myself which I am very grateful for. She is organised, efficient and reliable, count yourself lucky if you are able to have Katelyn as part of your team!',
        authorName: 'Ruby Fieldes',
        authorPosition: 'Client Web Support at Digital8',
        authorIcon: '/testimonials/ruby.jpg'
    },
    {
        testimonial: 'Katelyn is an enthusiastic developer with a real drive to learn and experiment with new technologies. She has a great understanding of what makes software usable for users with a strong focus on UI and UX.',
        authorName: 'Rhys McKenzie',
        authorPosition: 'Head of Development at Digital8',
        authorIcon: '/testimonials/rhys.jpeg'
    },
]

//PORTFOLIO
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
    {
        title: "Lighting Illusions",
        workingFor: "Digital8",
        workingForLink: "https://digital8.com.au/",
        dateLaunched: "Late 2023",
        excerpt: "I worked as a Front End developer on a large React & Laravel project for Lighting Illusions. This was a custom ecommerce website rebuild based on a Figma design using Tailwind. This project was managed in an Agile style with each developer being responsible for a certain number of stories to deliver in each sprint.",
        featuredImage: { src: "/portfolio/lighting-illusions.jpg", alt: "Lighting Illusions Website Rebuild" },
        siteUrl: "https://www.lightingillusions.com.au/",
        techStack: ["React", "NextJS", "Typescript", "Tailwind", "Sass", "Laravel"]
    },
    {
        title: "Ceiling Fans Direct",
        workingFor: "Digital8",
        workingForLink: "https://digital8.com.au/",
        dateLaunched: "Late 2023",
        excerpt: "I worked on a large-scale ecommerce React & Laravel project for Ceiling Fans Direct as a Front End developer. This build was implemented using Tailwind and based on a Figma design. This project was managed using the Agile project framework with each developer on the team being responsible for a certain number of stories to deliver in each sprint.",
        featuredImage: { src: "/portfolio/ceiling-fans-direct.jpg", alt: "Ceiling Fans Direct Website Rebuild" },
        siteUrl: "https://www.ceilingfansdirect.com.au/",
        techStack: ["React", "NextJS", "Typescript", "Tailwind", "Sass", "Laravel"]
    },
    {
        title: "Common Ground Queensland",
        workingFor: "Digital8",
        workingForLink: "https://digital8.com.au/",
        dateLaunched: "Early 2023",
        excerpt: "I was assigned to finish designing & build the new website for Common Ground QLD. Apart from initial mockups of the home page & navigation, I was the lead designer & developer for this project which was built in WordPress. We had many meetings with the project stakeholders to discuss features and design, and it was really good to see them so passionate about the new site. I really enjoyed the process from design to launch.",
        featuredImage: { src: "/portfolio/common-ground-qld.jpg", alt: "Common Ground Queensland Website Rebuild" },
        siteUrl: "https://commongroundqld.org.au/",
        techStack: ["Web Design", "WordPress", "Elementor", "CSS", "Javascript", "PHP"]
    },
    {
        title: "Slade Industries",
        workingFor: "Digital8",
        workingForLink: "https://digital8.com.au/",
        dateLaunched: "Mid 2023",
        excerpt: "I was tasked to work on the new Slade Industries website rebuild and redesign project. Apart from initial mockups of the home page completed by a former in-house designer, I was the lead designer & developer for this project. I also designed a separate landing page for their Siex technology. I designed & built the rest of the website based off the existing initial home page design to give it a consistent and polished feel, then deployed the site onto the live hosting environment once completed.",
        featuredImage: { src: "/portfolio/slade-industries.jpg", alt: "Slade Industries Website Rebuild" },
        siteUrl: "https://sladeindustries.com.au/",
        techStack: ["Web Design", "WordPress", "Elementor", "CSS"]
    },
    {
        title: "Pie Solutions",
        workingFor: "Digital8",
        workingForLink: "https://digital8.com.au/",
        dateLaunched: "Early 2024",
        excerpt: "I was assigned to build the new Pie Solutions website rebuild in WordPress & Elementor using an existing template but tweaking it to suit their design preferences. I selected a few base WordPress themes for them to choose from, and then I built out the design based on the different pages and sections they required. I launched the website on the client's servers for them at the end of the project.",
        featuredImage: { src: "/portfolio/pie-solutions.jpg", alt: "Pie Solutions Website Rebuild" },
        siteUrl: "https://piesolutions.com.au/",
        techStack: ["WordPress", "Elementor", "CSS"]
    },
    {
        title: "Logan City Skate Around",
        dateLaunched: "Early 2024",
        excerpt: "As a member of the roller skating club in Logan City, I volunteered my services to the team to redesign and build a new club website. I designed the website front page in Figma and once I received the go ahead from the club I built out the rest of the pages and launched the site on a hosting service suitable for WordPress & that the club could afford/maintain.",
        featuredImage: { src: "/portfolio/lcsa.jpg", alt: "Logan City Skate Around Website Rebuild" },
        siteUrl: "https://logancityskatearound.com/",
        techStack: ["Web Design", "WordPress", "Elementor", "CSS", "Javascript"]
    },
]