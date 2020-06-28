import React from 'react';

import { BarChart } from './bar';

import { ChartContainer } from './chart.style';

export const Chart: React.FC<IChart> = ({ data }) => {
  const [barHeights, setBarHeights] = React.useState<number[]>([]);

  const calcHeightPercent = React.useCallback((max: number, current: number): number => {
    return current / max;
  }, []);

  const getBarHeights = React.useCallback((data: number[]): void => {
    const maxNumber = Math.max(...data);
    const percents: number[] = [];

    data.map(number => percents.push(calcHeightPercent(maxNumber, number)));

    setBarHeights(percents);
  }, [calcHeightPercent]);

  React.useEffect(() => {
    getBarHeights(data);
  }, [data, getBarHeights]);

  return (
    <ChartContainer>
      {
        data.map((number, index) => <BarChart key={`bar-chart-${number}-${index}`} day={'Mon'} number={number} height={barHeights[index]} />)
      }
    </ChartContainer>
  );
};

interface IChart {
  data: number[];
}
