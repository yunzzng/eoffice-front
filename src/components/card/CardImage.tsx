import { BaseProps } from './Card';

interface CardImageProps extends BaseProps {
  className?: string;
  src?: string;
  alt?: string;
  onClick: () => {};
}

const CardImage = (props: CardImageProps) => {
  const { src, alt, className, onClick } = props;

  const handleOnClick = () => {
    onClick();
  };

  return (
    <>
      <div>
        <img
          src={src}
          alt={alt}
          className={className}
          onClick={handleOnClick}
        />
      </div>
    </>
  );
};

export default CardImage;
