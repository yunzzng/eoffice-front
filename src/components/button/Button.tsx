import { FC, FormEvent } from 'react';
import styles from './Button.module.css';

interface NavigateButtonsProps {
  label: string;
  onClick: () => void | ((e: FormEvent<HTMLFormElement>) => void);
  className?: string;
}

export const NavigateButtons: FC<NavigateButtonsProps> = ({
  label,
  onClick,
  className
}) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};
