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
    id: number | string;
    title: string;
    shortDesc?: string;
    fullDesc?: string;
    price?: string;
    duration?: string;
    icon?: React.ElementType | React.ReactNode | string;
    image?: StaticImageData | string;
};