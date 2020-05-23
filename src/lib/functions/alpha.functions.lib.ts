import { rgba } from '../regexs';

export const alpha = (color: string, alpha: number): string => {
  const values = color.match(rgba)!;
  const colors = values.slice(0, 3);

  return `rgba(${[...colors]}, ${alpha})`;
};
