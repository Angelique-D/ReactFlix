import React, { useState } from "react";
import { DropdownProps } from "../../types/components/common";

const Dropdown: React.FC<DropdownProps> = ({links}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>

      </div>
    );
};

export default Dropdown;