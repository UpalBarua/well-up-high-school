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
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 mt-4 mb-2 rounded-lg shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
