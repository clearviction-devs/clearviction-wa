export interface Header {
    header: string;
    body?: string;
    subheading?: string;
    subheading2?: string;
    imgsrc?: string;
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
}

export interface FAQ {
    id: string;
    summary: string;
    details: string;
}

export interface WayToParticipate {
    id: string;
    title: string;
    body: string;
    imgsrc: string;
    href: string;
}

export interface Info {
    id: string;
    summary?: string;
    details: string;
}

export interface navItem {
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
