export interface Project {
    title: string;
    category: string;
    year: string;
    color: string;
    desc: string;
    image: string;
    content?: string;
    details?: {
        challenge: string;
        approach: string;
        impact: string;
        tags: string[];
    };
}
