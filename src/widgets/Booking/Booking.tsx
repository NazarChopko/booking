import Button from '../../shared/Button';
import BookingInfo from '../../shared/BookingInfo';
import CustomDatePicker from '../../shared/CustomDatePicker';
import ProgressTool from '../../shared/ProgressTool';
import Container from '../../Layouts/Container';

import useHandleBooking from '../../hooks/useHandleBooking';

import { getMinTime } from '../../helpers/helpers';

import { addDays } from 'date-fns';

const BookingWidget = () => {
  const {
    startDate,
    endDate,
    startTime,
    endTime,
    handleChangeStartDate,
    handleChangeEndDate,
    handleChangeEndTime,
    handleChangeStartTime,
    activeStep,
    NOW,
    handleClickCancel,
    bokingNewDate,
    excludedStartDays,
    excludedEndDays
  } = useHandleBooking();

  return (
    <div className="bg-primary-grey h-full  lg:h-[400px] relative">
      <video
        autoPlay
        muted
        loop
        className=" aspect-video  h-full w-full object-cover  lg:object-fill absolute  brightness-80"
        src="/video.mp4"
      ></video>
      <BookingInfo startDate={startDate} startTime={startTime} endDate={endDate} endTime={endTime} />
      <Container containerType="column" className="p-4  gap-2 lg:flex-row relative z-20">
        <CustomDatePicker
          label="Start day"
          step={1}
          activeStep={activeStep}
          selected={startDate}
          placeholderText="Pick start date"
          dateFormat="dd.MM.yyyy"
          onChange={handleChangeStartDate}
          minDate={NOW}
          excludeDates={excludedStartDays.map((date) => new Date(date))}
        />
        <ProgressTool step={1} activeStep={activeStep} />
        <CustomDatePicker
          label="End day"
          step={2}
          activeStep={activeStep}
          selected={endDate}
          placeholderText="Pick start date"
          dateFormat="dd.MM.yyyy"
          onChange={handleChangeEndDate}
          minDate={startDate ? addDays(startDate, 1) : undefined}
          excludeDates={excludedEndDays.map((date) => new Date(date))}
        />
        <ProgressTool step={2} activeStep={activeStep} />
        <CustomDatePicker
          label="Start time"
          step={3}
          activeStep={activeStep}
          onChange={handleChangeStartTime}
          selected={startTime}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          dateFormat="HH:mm"
          minTime={getMinTime(startDate)}
          maxTime={new Date(0, 0, 0, 23, 59)}
          placeholderText="Pick start time"
        />
        <ProgressTool step={3} activeStep={activeStep} />
        <CustomDatePicker
          label="End time"
          step={4}
          activeStep={activeStep}
          onChange={handleChangeEndTime}
          selected={endTime}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          dateFormat="HH:mm"
          minTime={new Date(0, 0, 0, 0, 0)}
          maxTime={new Date(0, 0, 0, 14, 0)}
          placeholderText="Pick end time"
        />
      </Container>
      <Container containerType="row" className="gap-2 pb-5">
        <Button onClick={handleClickCancel} text="Cancel" />
        <Button onClick={bokingNewDate} text="Booking" disabled={activeStep < 5} />
      </Container>
    </div>
  );
};

export default BookingWidget;
