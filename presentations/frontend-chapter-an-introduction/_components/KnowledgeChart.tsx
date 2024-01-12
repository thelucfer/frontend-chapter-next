'use client';

import { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';
import styles from './Chart.module.css';
import { devsByKnowledgeLevel, KnowledgeLevel } from './constants';

export const KnowledgeChart = () => {
  const primaryAxis = useMemo(
    (): AxisOptions<{ knowledgeLevel: KnowledgeLevel; number: number }> => ({
      position: 'bottom',
      getValue: (datum) => datum.knowledgeLevel,
    }),
    [],
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<{ knowledgeLevel: KnowledgeLevel; number: number }>[] => [
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
              label: 'Knowledge Level',
              data: devsByKnowledgeLevel,
            },
          ],
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};
