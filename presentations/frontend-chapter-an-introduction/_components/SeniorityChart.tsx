'use client';

import { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';
import styles from './Chart.module.css';
import { devsBySeniority, Seniority } from './constants';

export const SeniorityChart = () => {
  const primaryAxis = useMemo(
    (): AxisOptions<{ seniority: Seniority; number: number }> => ({
      position: 'bottom',
      getValue: (datum) => datum.seniority,
    }),
    [],
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<{ seniority: Seniority; number: number }>[] => [
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
      <h2 className={styles.title}>Devs by seniority</h2>
      <Chart
        options={{
          data: [
            {
              label: 'Seniority',
              data: devsBySeniority,
            },
          ],
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};
