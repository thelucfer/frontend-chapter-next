import * as R from 'remeda';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;

export const formatDate = (date: string) =>
  R.pipe(
    date.split('-'),
    ([year, month, day]) => `${MONTHS[Number(month) - 1]} ${day}, ${year}`,
  );
