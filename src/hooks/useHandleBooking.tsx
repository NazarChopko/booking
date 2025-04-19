import { useState, useEffect } from 'react';

import {
  prepareDate,
  prepareTime,
  getValueFromLocaleStorage,
  setValueToLocaleStorage,
  isDateIsAvailable,
  getExludedtDays,
  areDatesIntersected
} from '../helpers/helpers';

import { toast } from 'react-toastify';

import type { BookedDate } from '../types/entities/bookedDate';

type PickerDate = Date | null;

const useHandleBooking = () => {
  const [startDate, setStartDate] = useState<PickerDate>(null);
  const [endDate, setEndDate] = useState<PickerDate>(null);
  const [startTime, setStartTime] = useState<PickerDate>(null);
  const [endTime, setEndTime] = useState<PickerDate>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [bookedDates, setBookedDates] = useState<BookedDate[]>([]);
  const [excludedStartDays, setExcludedStartDays] = useState<Date[]>([]);
  const [excludedEndDays, setExcludedEndDays] = useState<Date[]>([]);

  const NOW = new Date();

  useEffect(() => {
    const storedBookedDates = getValueFromLocaleStorage('bookedDates');
    if (storedBookedDates) {
      const bookedRanges = JSON.parse(storedBookedDates);
      setBookedDates(
        bookedRanges.map((range: { start: string; end: string }) => ({
          start: new Date(range.start),
          end: new Date(range.end)
        }))
      );
    }
  }, []);

  useEffect(() => {
    if (bookedDates.length) {
      const excludedStartDaysArr = [] as Date[];
      getExludedtDays(bookedDates, excludedStartDaysArr, 'start');

      setExcludedStartDays(excludedStartDaysArr);
    }
  }, [bookedDates]);

  useEffect(() => {
    if (bookedDates.length) {
      const excludedEndDaysArr = [] as Date[];
      getExludedtDays(bookedDates, excludedEndDaysArr, 'end');

      setExcludedEndDays(excludedEndDaysArr);
    }
  }, [bookedDates]);

  const handleChangeStartDate = (date: PickerDate): void => {
    if (isDateIsAvailable(date!, excludedStartDays)) {
      toast.warn('Please select another day! Unfortunately, you cant book only 1 day');
      return;
    }

    setStartDate(date);
    setActiveStep((prev) => prev + 1);
  };

  const handleChangeEndDate = (date: PickerDate): void => {
    if (areDatesIntersected(startDate!, date!, excludedStartDays)) {
      toast.warn('Please select another day! Your range already has included reserved days');
      return;
    }
    setEndDate(date);
    setActiveStep((prev) => prev + 1);
  };

  const handleChangeStartTime = (date: PickerDate): void => {
    if (date && startDate) {
      setStartTime(new Date(new Date(startDate).setHours(date.getHours(), date.getMinutes())));
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleChangeEndTime = (date: PickerDate): void => {
    if (date && endDate) {
      setEndTime(new Date(new Date(endDate).setHours(date.getHours(), date.getMinutes())));
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleClickCancel = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setActiveStep(1);
    setStartDate(null);
    setEndDate(null);
    setStartTime(null);
    setEndTime(null);
  };

  const bokingNewDate = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const newBookedDate = [
      ...bookedDates,
      {
        start: startTime as Date,
        end: endTime as Date
      }
    ];

    setValueToLocaleStorage('bookedDates', JSON.stringify(newBookedDate));
    setBookedDates(newBookedDate);

    toast.success(
      `You have successfully booked a new date! From ${prepareTime(startTime)} ${prepareDate(startDate)} to ${prepareTime(endTime)} ${prepareDate(endDate)}`
    );

    handleClickCancel(e);
  };

  return {
    startDate,
    endDate,
    startTime,
    endTime,
    handleChangeStartDate,
    handleChangeEndDate,
    handleChangeStartTime,
    handleChangeEndTime,
    activeStep,
    NOW,
    handleClickCancel,
    bokingNewDate,
    excludedStartDays,
    excludedEndDays
  };
};

export default useHandleBooking;
