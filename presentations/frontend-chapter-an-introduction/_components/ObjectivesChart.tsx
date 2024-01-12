'use client';

import { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';
import styles from './Chart.module.css';
import { Objective, objectiveVotes } from './constants';

export const ObjectivesChart = () => {
  const primaryAxis = useMemo(
    (): AxisOptions<{ objective: Objective; number: number }> => ({
      position: 'left',
      getValue: (datum) => datum.objective,
    }),
    [],
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<{ objective: Objective; number: number }>[] => [
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
      <h2 className={styles.title}>Objectives</h2>
      <Chart
        options={{
          data: [
            {
              label: 'Objectives',
              data: objectiveVotes,
            },
          ],
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};
