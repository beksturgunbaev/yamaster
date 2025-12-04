import React from "react";
import { StaticImageData } from "next/image";

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