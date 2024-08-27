import { Link } from '../link';
import { Movie } from '../movie';

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
    isSignIn: boolean;
}

export interface CardProps {
    arrayObject?: Movie[];
}

export interface ModalProps {
    setIsModalOpen: (isSignIn: boolean) => void;
}

export interface LoginProps {
    switchToSignUp: () => void;
}

export interface SignUpProps {
    switchToLogin: () => void;
}