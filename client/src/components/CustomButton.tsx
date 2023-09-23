import React, { ReactNode } from "react";

interface CustomBtnProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
const CustomButton: React.FC<CustomBtnProps> = ({
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`font-bold mt-4 mb-2 rounded-lg shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
