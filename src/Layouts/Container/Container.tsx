import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = {
  containerType: 'row' | 'column';
  className?: string;
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ containerType, children, className = '' }) => {
  const containerDirectionStyles = {
    row: 'flex justify-center items-center',
    column: 'flex flex-col justify-center items-center'
  };
  return <div className={twMerge(containerDirectionStyles[containerType], className)}>{children}</div>;
};

export default Container;
