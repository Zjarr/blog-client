import { rgba } from '../regexs';

export const darken = (color: string, darkness: number): string => {
  const values = color.match(rgba)!;
  const colors = values.slice(0, 3);
  const alpha = values[3];

  const numbers = colors.map((value: string): string => {
    const number = parseInt(value, 10);

    if (number - darkness <= 0) {
      return '0';
    }

    return (number - darkness).toString();
  });

  numbers.push(alpha);

  return `rgba(${[...numbers]})`;
};
