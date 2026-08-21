import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-[90%] mx-auto ${className}`}>
      {children}
    </div>
  );
};
