import React from "react";

export interface ICustomLink {
    text: string;
    link: string;
    className?: string;
    Icon?: React.ElementType;
}
export interface ICustomButton {
    text: string;
    className?: string;
    type?: "button" | "reset" | "submit";
    onClick: () => void;
}
export interface IService {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    fullDescription: string;
    price: string;
    duration: string;
    icon: string;
    image?: string;
    benefits: string[];
    includes: string[];
    process: string[];
    faqs: { question: string; answer: string }[];
    relatedServices: string[];
    keywords: string[];
    category: 'installation' | 'repair' | 'cleaning' | 'emergency' | 'maintenance';
}

export interface IBlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        role: string;
        avatar?: string;
    };
    publishedAt: string;
    updatedAt?: string;
    readingTime: string;
    category: 'tips' | 'guides' | 'news' | 'cases' | 'maintenance';
    tags: string[];
    image: string;
    imageAlt: string;
    keywords: string[];
    featured?: boolean;
}