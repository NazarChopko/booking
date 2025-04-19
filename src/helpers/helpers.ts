import { addDays, setHours, setMinutes, isSameDay, eachDayOfInterval } from 'date-fns';
export const getMinTime = (startDate: Date | null): Date | undefined => {
  if (!startDate) return;
  const today = new Date();
  const todayHours = today.getHours();

  const isStartDayIsToday =
    startDate.getDate() === today.getDate() &&
    startDate.getMonth() === today.getMonth() &&
    startDate.getFullYear() === today.getFullYear();
  return isStartDayIsToday ? (todayHours < 14 ? setHours(setMinutes(today, 59), 13) : today) : new Date(0, 0, 0, 14, 0);
};

export const prepareDate = (date: Date | null): string => {
  return date ? date.toLocaleString().split(',')[0] : '__.__.____';
};

export const prepareTime = (date: Date | null): string => {
  return date ? date.toLocaleTimeString().slice(0, 5) : '__:__';
};

export const getValueFromLocaleStorage = (key: string): string | null => {
  return localStorage.getItem(key) || null;
};

export const setValueToLocaleStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const isDateIsAvailable = (date: Date, excludedStartDays: Date[]): boolean => {
  const nextDay = addDays(date!, 1);
  const previousDay = addDays(date!, -1);
  const isContainedNextDay = excludedStartDays.some((day) => isSameDay(day, nextDay));
  const isContainedPrevDay = excludedStartDays.some((day) => isSameDay(day, previousDay));

  return (isContainedNextDay && isContainedPrevDay) || isContainedNextDay;
};

export const getExludedtDays = (
  parsedRanges: { start: Date; end: Date }[],
  excludedStartDaysArr: Date[],
  type: 'start' | 'end'
): void =>
  parsedRanges.forEach((range: { start: Date; end: Date }) => {
    const { start, end } = range;
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    for (let i = 0; type === 'start' ? i < days : i <= days; i++) {
      excludedStartDaysArr.push(new Date(start.getTime() + i * 24 * 60 * 60 * 1000));
    }
  });

export const areDatesIntersected = (startDate: Date, date: Date, excludedStartDays: Date[]) => {
  if (startDate && date) {
    const getStartEndIntervals = eachDayOfInterval({ start: startDate, end: date });
    const isIntersected = getStartEndIntervals.some((day) =>
      excludedStartDays.some((excludedDay) => isSameDay(excludedDay, day))
    );
    return isIntersected;
  }
};
