import { getFullYear } from './utils';
import { getLatestNotification } from './utils';
import { getFooterCopy } from './utils';

test('getFullYear should return the current year', () => {
  const currentYear = new Date().getFullYear();
  const result = getFullYear();
  expect(result).toEqual(currentYear);
});

test('getFooterCopy should return the correct string when the argument is true', () => {
  const result = getFooterCopy(true);
  expect(result).toEqual('Holberton School');
});

test('getFooterCopy should return the correct string when the argument is false', () => {
  const result = getFooterCopy(false);

  expect(result).toEqual('Holberton School main dashboard');
});

test('getLatestNotification should return a non-empty string', () => {
  const result = getLatestNotification();

  expect(result).toEqual(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
