export interface AriaLabels {
    ctaButton?: string
}

export interface Header {
    id?: string;
    header: string;
    body?: string;
    subheading?: string;
    subheading2?: string;
    ctaLink?: string;
    ctaText?: string;
    imgsrc?: string;
    ariaLabels?: AriaLabels;
}

export interface Fact {
    id: string;
    icon: string;
    details: string;
}

export interface AirtableEmbed {
    title: string;
    id: string;
    src: string;
    height: string;
}

export interface FAQ {
    id: string;
    summary: string;
    details: string;
}

export interface GridItem {
    id: string;
    title?: string;
    body: string;
    imgsrc: string;
    href?: string;
}

export interface Info {
    id: string;
    summary: string;
    details: string;
}

export interface NavItem {
    href: string;
    text: string;
}

export interface Button {
    name: string;
    href: string;
}

export interface CardItem {
    title: string;
    body: string;
    imgRef: string;
}

export interface Card {
    title: string;
    sectionId: string;
    subtitle: string;
    cardItems: CardItem[];
    accordianItems: Info[];
}

export interface SectionNav {
    label: string;
    href: string;
}

export interface GridSection {
    id: string;
    title: string;
    subtitle?: string;
    ctaLink?: string;
    ctaText?: string;
    items: GridItem[];
    ariaLabels?: AriaLabels;
}

export interface Reason {
    id: string;
    details: string;
}
export interface MetaPageHead {
    title: string;
    content: string;
}

export interface GetStartedStep {
    title: string;
    body: string;
    ctaText?: string;
    ctaLink?: string;
    data: string[];
    ariaLabels?: AriaLabels;
}

export interface ContactType {
    value: string;
    label: string;
}

export interface FormInfo {
    name: string;
    email: string;
    contactType: string;
    message: string;
}
