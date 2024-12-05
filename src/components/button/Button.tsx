import React, { FormEvent } from 'react';

interface NavigateButtonsProps {
  label: string;
  onClick: () => void | ((e: FormEvent<HTMLFormElement>) => void);

  className?: string;
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
