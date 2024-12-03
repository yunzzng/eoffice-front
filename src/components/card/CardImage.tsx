import { BaseProps } from './Card';

interface CardImageProps extends BaseProps {
  className?: string;
  src?: string;
  alt?: string;
}

const CardImage = (props: CardImageProps) => {
  const { src, alt, className } = props;
  return (
    <>
      <div>
        <img src={src} alt={alt} className={className} />
      </div>
    </>
  );
};

export default CardImage;
