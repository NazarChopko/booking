import { FC } from 'react';

type TitleProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  className?: string;
};

const Title: FC<TitleProps> = ({ as: Tag, text, className }) => {
  return <Tag className={className}>{text}</Tag>;
};

export default Title;
