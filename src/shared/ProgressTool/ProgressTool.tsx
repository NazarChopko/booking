import { FC } from 'react';

import { twMerge } from 'tailwind-merge';
type ProgressToolProps = {
  step: number;
  activeStep: number;
};

const ProgressTool: FC<ProgressToolProps> = ({ step, activeStep }) => {
  const disabledStyles = step !== activeStep ? 'opacity-30' : '';
  return <div className={twMerge('bg-white w-[2px] h-[40px] lg:w-[30px] lg:h-[2px]', disabledStyles)} />;
};

export default ProgressTool;
