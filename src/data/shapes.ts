export interface Link {
    key: number
    link: string
    text: string
}

export interface Icon {
    key: string
    link: string
    icon: Image
    newTab?: boolean
}

export interface Button {
    text: string
    link: string
}

export interface TextCard {
    title: string
    description: string
}

export interface Testimonial {
    testimonial: string
    authorName: string
    authorPosition: string
    authorIcon?: string
}

export interface PortfolioProject {
    title: string
    workingFor?: string
    workingForLink?: string
    dateLaunched: string
    excerpt: string
    featuredImage: Image
    siteUrl: string
    techStack: string[]
}

export type Image = {
    key?: string
    src: string
    alt: string
}
