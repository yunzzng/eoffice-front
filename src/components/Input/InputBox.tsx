import { Children, PropsWithChildren, ReactElement } from 'react';
import Label from './label';
import Input from './input';

export interface BaseProps extends PropsWithChildren {}

interface InputProps extends BaseProps {
  className?: string;
}

const InputBox = (props: InputProps) => {
  const { children, className } = props;

  const inbox = Children.toArray(children) as ReactElement[];

  const label = inbox.find((child) => child.type === Label);
  const input = inbox.find((child) => child.type === Input);

  return (
    <>
      <div className={className}>
        {label}
        {input}
      </div>
    </>
  );
};

export default InputBox;
