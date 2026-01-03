import type { ReactNode } from 'react';

export type AcademyPathType = 'lux' | 'entrepreneur' | 'blockchain';

type BlogFeature = {
    title: string;
    blogs: Array<{
        id: string;
        title: string;
        description: string;
        date?: string;
        link: string;
    }>;
};

export interface AcademyLandingPageConfig {
    id: string;
    name: string;
    heroTitle: string;
    heroAccent: string;
    heroAccentWords?: string[];
    heroDescription: string;
    pathType: AcademyPathType;
    customContent?: ReactNode;
    showBlogs?: boolean;
    features?: {
        codebaseBlogs?: BlogFeature;
        highlights?: BlogFeature;
    };
}