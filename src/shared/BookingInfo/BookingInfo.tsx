import { FC } from 'react';
import { prepareDate, prepareTime } from '../../helpers/helpers';

type BookingInfoProps = {
  startTime: Date | null;
  startDate: Date | null;
  endTime: Date | null;
  endDate: Date | null;
};

const BookingInfo: FC<BookingInfoProps> = ({ startTime, startDate, endTime, endDate }) => {
  return (
    <p className="text-sm text-center">
      From{''}
      <span className="text-primary font-semibold mx-2">
        {prepareTime(startTime)} - {prepareDate(startDate)}
      </span>{' '}
      <br />
      To{' '}
      <span className="text-primary font-semibold mx-2">
        {prepareTime(endTime)} - {prepareDate(endDate)}
      </span>{' '}
    </p>
  );
};

export default BookingInfo;
