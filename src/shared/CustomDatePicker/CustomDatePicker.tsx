import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import DatePicker from 'react-datepicker';

type CustomDatePickerProps = {
  label: string;
  placeholderText: string;
  dateFormat: string;
  selected: Date | null;
  onChange: (date: Date | null) => void;
  step: number;
  activeStep: number;
  minDate?: Date;
  showTimeSelect?: boolean;
  showTimeSelectOnly?: boolean;
  timeIntervals?: number;
  minTime?: Date | undefined;
  maxTime?: Date | undefined;
  excludedTimes?: Date[];
  excludeDates?: Date[] | undefined;
  includedTimes?: Date[];
};

const CustomDatePicker: FC<CustomDatePickerProps> = ({ label, step, activeStep, ...props }) => {
  const disabledStyles = step !== activeStep ? 'opacity-30 pointer-events-none' : '';
  return (
    <div className={twMerge('flex flex-col text-white bg-primary p-2 rounded-sm  ', disabledStyles)}>
      <span className="text-[20px] lg:text-[16px]">{label}</span>
      <DatePicker className="bg-gray-200 text-primary-text-grey px-1 cursor-pointer rounded-sm w-full" {...props} />
    </div>
  );
};

export default CustomDatePicker;
