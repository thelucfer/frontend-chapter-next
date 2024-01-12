import { MDXComponents } from 'mdx/types';
import { Counter } from './Counter';
import { KnowledgeChart } from './KnowledgeChart';
import { Objectives } from './Objectives';
import { ObjectivesChart } from './ObjectivesChart';
import { PainPointsChart } from './PainPointChart';
import { SeniorityChart } from './SeniorityChart';
import { StackChart } from './StackChart';
import { TimeChart } from './TimeChart';

export const components: MDXComponents = {
  Wrapper: (props) => <div {...props}>{props.children}</div>,
  Counter,
  Objectives,
  SeniorityChart,
  KnowledgeChart,
  StackChart,
  PainPointsChart,
  ObjectivesChart,
  TimeChart,
};
