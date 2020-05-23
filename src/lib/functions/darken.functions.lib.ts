import { rgba } from '../regexs';

export const darken = (color: string, darkness: number): string => {
  const values = color.match(rgba)!;
  const numbers = values.map((value: string): string => {
    const number = parseFloat(value);

    if (number % 1 !== 0) {
      return value;
    }

    if (number - darkness <= 0) {
      return '0';
    }

    return (number - darkness).toString();
  });

  return `rgba(${[...numbers]})`;
};
