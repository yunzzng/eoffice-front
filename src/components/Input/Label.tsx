import { BaseProps } from './inputBox';

interface LabelProps extends BaseProps {
  htmlFor?: string;
  className?: string;
}

const Label = (props: LabelProps) => {
  const { children, htmlFor, className } = props;

  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {children}
      </label>
    </>
  );
};

export default Label;
