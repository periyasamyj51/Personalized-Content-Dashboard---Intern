export type ContentType = 'news' | 'movie' | 'social';
export type Category = 'technology' | 'sports' | 'finance' | 'entertainment' | 'science' | 'business';
export interface ContentItem { id:string; type:ContentType; category:Category; title:string; description:string; image:string; source:string; url?:string; actionLabel:string; publishedAt:string; tags:string[]; rating?:number; duration?:string; author?:string; live?:boolean; }
export interface UserProfile { name:string; email:string; role:string; avatar:string; }
