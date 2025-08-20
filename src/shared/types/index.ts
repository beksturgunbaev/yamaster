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