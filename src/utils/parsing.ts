import {isString, isNumber} from 'lodash';
import {DateTime} from 'luxon';

export const parseString = (val: unknown): string => {
  if (val && isString(val)) {
    return val;
  }

  throw new Error('Parsing error: invalid string.');
};

export const parseNumber = (val: unknown): number => {
  if (val && isNumber(val)) {
    return val;
  }

  throw new Error('Parsing error: invalid number.');
};

export const parseDate = (val: unknown): DateTime => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const timestampISO = parseString(val);
  const date = DateTime.fromISO(timestampISO);

  if (date.isValid) {
    return date;
  }

  throw new Error('Parsing error: invalid date.');
};
