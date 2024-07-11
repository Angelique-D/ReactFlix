import { Link } from '../link';

export interface ButtonProps {
    label: string | React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export interface ListUrlWithArrayProps {
    arrayLinks: link[];
}

export interface DropdownProps {
    links: Link[];
}

export interface DrawerProps {
    arrayLinks: link[];
    setIsDrawerOpen: (isOpen: boolean) => void;
}