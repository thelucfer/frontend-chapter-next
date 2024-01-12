'use client';

import { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';
import styles from './Chart.module.css';
import { PainPoint, painPointVotes } from './constants';

export const PainPointsChart = () => {
  const primaryAxis = useMemo(
    (): AxisOptions<{ painPoint: PainPoint; number: number }> => ({
      position: 'left',
      getValue: (datum) => datum.painPoint,
    }),
    [],
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<{ painPoint: PainPoint; number: number }>[] => [
      {
        position: 'right',
        getValue: (datum) => datum.number,
        scaleType: 'linear',
        elementType: 'bar',
      },
    ],
    [],
  );

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Pain points</h2>
      <Chart
        options={{
          data: [
            {
              label: 'Pain points',
              data: painPointVotes,
            },
          ],
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};
