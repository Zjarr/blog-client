import { rgba } from '../regexs';

export const lighten = (color: string, lightness: number): string => {
  const values = color.match(rgba)!;
  const numbers = values.map((value: string): string => {
    const number = parseFloat(value);

    if (number % 1 !== 0) {
      return value;
    }

    if (number + lightness >= 255) {
      return '255';
    }

    return (number + lightness).toString();
  });

  return `rgba(${[...numbers]})`;
};
