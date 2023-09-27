export type Service = {
    title: string;
    url: string;
    imageUrl: string;
    thumbnailUrl: string;
    content: string;
}

export type Sector = Service;

export type Contact = {
    title : string;
    url : string;
    latitude : string;
    longitude : string;
    tel : string;
    fax?: string;
    email : string;
    address : string;
    resumeUrl?: string;
    agentName : string;
}