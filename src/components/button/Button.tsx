import { FC, FormEvent } from 'react';

interface NavigateButtonsProps {
  label: string;
  onClick: () => void | ((e: FormEvent<HTMLFormElement>) => void);

  className?: string;
}

export const NavigateButtons: FC<NavigateButtonsProps> = ({
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
