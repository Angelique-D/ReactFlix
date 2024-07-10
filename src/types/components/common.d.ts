import { Link } from '../link';

export interface ButtonProps {
    label: string | React.ReactNode;
    onClick?: () => void;
}

export interface LinkProps {
    href: string;
    element: React.ReactNode;
    className?: string;
}

export interface DropdownProps {
    links: Link | Link[];
}