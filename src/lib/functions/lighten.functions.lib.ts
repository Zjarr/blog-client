import { rgba } from '../regexs';

export const lighten = (color: string, lightness: number): string => {
  const values = color.match(rgba)!;
  const colors = values.slice(0, 3);
  const alpha = values[3];

  const numbers = colors.map((value: string): string => {
    const number = parseFloat(value);

    if (number + lightness >= 255) {
      return '255';
    }

    return (number + lightness).toString();
  });

  numbers.push(alpha);

  return `rgba(${[...numbers]})`;
};
