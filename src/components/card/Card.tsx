import { PropsWithChildren } from 'react';

export interface BaseProps extends PropsWithChildren {}
interface CardProps extends BaseProps {
  className?: string;
}

const Card = (props: CardProps) => {
  const { children, className } = props;
  return (
    <>
      <ul className={className}>{children}</ul>
    </>
  );
};

export default Card;

// {/* <Card className={'class1'}>
//   {posts.map((post) => (
//     <CardItem className={'class2'} id={post.id}>
//       <CardImage className={'class3'} src={post.file} alt={'회의실 이미지'} />
//       <CardTitle className={'class4'}>{post.name}</CardTitle>
//       {/* <EditButton onClick={() => handleEditClick(post.id)} /> */}
//     </CardItem>
//   ))}
// </Card>; */}
