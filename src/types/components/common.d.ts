export interface ButtonProps {
    label: string;
    onClick: () => void;
}

export interface LinkProps {
    href: string;
    element: React.ReactNode;
    className?: string;
}