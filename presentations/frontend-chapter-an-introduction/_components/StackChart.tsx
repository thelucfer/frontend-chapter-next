'use client';

import { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';
import styles from './Chart.module.css';
import { devsByStack, Stack } from './constants';

export const StackChart = () => {
  const primaryAxis = useMemo(
    (): AxisOptions<{ stack: Stack; number: number }> => ({
      position: 'bottom',
      getValue: (datum) => datum.stack,
    }),
    [],
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<{ stack: Stack; number: number }>[] => [
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
      <h2 className={styles.title}>Devs by frontend knowledge level</h2>
      <Chart
        options={{
          data: [
            {
              label: 'Stack',
              data: devsByStack,
            },
          ],
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};
