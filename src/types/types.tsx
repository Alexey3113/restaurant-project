import React from "react";

export interface IPath {
    path: string,
    element: React.ReactNode
}

export interface IModal {
    children?: React.ReactNode,
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
}

export interface IInput {
    value: string,
    changeValue: (value: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string,
    title: string,
    placeholder?: string
}
export interface ICheckbox {
    value: boolean,
    changeValue: () => void,
    title: string
}