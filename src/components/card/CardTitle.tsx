import { BaseProps } from './Card';

interface CardTitleProps extends BaseProps {
  className?: string;
}

const CardTitle = (props: CardTitleProps) => {
  const { children, className } = props;
  return (
    <>
      <p className={className}>{children}</p>
    </>
  );
};

export default CardTitle;
