'use client';

import { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';
import styles from './Chart.module.css';
import { devsByTime, TimeType } from './constants';

export const TimeChart = () => {
  const primaryAxis = useMemo(
    (): AxisOptions<{ time: TimeType; number: number }> => ({
      position: 'bottom',
      getValue: (datum) => datum.time,
    }),
    [],
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<{ time: TimeType; number: number }>[] => [
      {
        position: 'left',
        getValue: (datum) => datum.number,
        scaleType: 'linear',
        elementType: 'bar',
      },
    ],
    [],
  );

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Time per week</h2>
      <Chart
        options={{
          data: [
            {
              label: 'Time per week',
              data: devsByTime,
            },
          ],
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};
