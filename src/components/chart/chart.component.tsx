import React from 'react';

import { IBlogsReport } from '../../utils/interfaces';

import { BarChart } from './bar';
import { ChartContainer } from './chart.style';

export const Chart: React.FC<IChart> = ({ data }) => {
  const [barHeights, setBarHeights] = React.useState<number[]>([]);

  const calcHeightPercent = React.useCallback((max: number, current: number): number => {
    if (current === 0 && max === 0) return 0;

    return current / max;
  }, []);

  const getBarHeights = React.useCallback((data: number[]): void => {
    const maxNumber = Math.max(...data);
    const percents: number[] = [];

    data.map(number => percents.push(calcHeightPercent(maxNumber, number)));

    setBarHeights(percents);
  }, [calcHeightPercent]);

  React.useEffect(() => {
    const reportNumber = data.map(report => report.blogs);

    getBarHeights(reportNumber);
  }, [data, getBarHeights]);

  return (
    <ChartContainer>
      {
        data.map((report, index) =>
          <BarChart
            day={report.day}
            height={barHeights[index]}
            key={`bar-chart-${report.day}-${index}`}
            number={report.blogs} />
        )
      }
    </ChartContainer>
  );
};

interface IChart {
  data: IBlogsReport[];
}
