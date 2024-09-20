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

export interface FAQ {
    id: string;
    summary: string;
    details: string;
}

export interface HomePlayCards {
    title: string;
    details: string;
    ctaButton: string;
    buttonHref: string;
}

export interface Info {
    id: string;
    summary: string;
    details: string;
}

export interface NavItem {
    href: string;
    text: string;
    width?: string;
    sublist?: {
        text: string;
        href: string;
    }[];
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
    subtitle2?: string;
    cardItems: CardItem[];
    accordianItems: Info[];
}

export interface MetaPageHead {
    title: string;
    content: string;
}

export interface GetStartedStep {
    title: string;
    overline: string;
    body: string;
    ctaText?: string;
    ctaLink?: string;
    useMD?: boolean;
    cardHeight?: number;
}

export interface CarouselCard {
    title: string;
    details: string;
    iconSource?: string;
    ctaButton: string;
    buttonHref: string;
}
