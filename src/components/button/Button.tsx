import React from 'react';

interface NavigateButtonsProps {
  label: string;
  onClick: () => void;
  className : string;
}

export const NavigateButtons: React.FC<NavigateButtonsProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};
