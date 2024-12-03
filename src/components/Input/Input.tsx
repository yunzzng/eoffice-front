import { ChangeEvent } from 'react';
import { BaseProps } from './inputBox';

interface InputProps extends BaseProps {
  type?: 'number' | 'text' | 'email' | 'password' | 'file';
  name?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { type, name, id, placeholder, className, value, onChange } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={handleOnChange}
      />
    </>
  );
};

export default Input;
