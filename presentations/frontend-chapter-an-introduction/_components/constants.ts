export const Seniorities = {
  starter: 'Starter',
  junior: 'Junior',
  mid: 'Mid',
  senior: 'Senior',
  seniorPlus: 'Senior+',
} as const;

export type Seniority = (typeof Seniorities)[keyof typeof Seniorities];

export const Stacks = {
  frontend: 'Frontend',
  fullstackFrontendFocused: 'Fullstack, frontend focused',
  fullstackBalanced: 'Fullstack, balanced',
  fullstackBackendFocused: 'Fullstack, backend focused',
  backend: 'Backend',
  qa: 'QA',
} as const;

export type Stack = (typeof Stacks)[keyof typeof Stacks];

export const KnowledgeLevels = {
  veryBasic: 'Very Basic',
  basic: 'Basic',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  advancedPlus: 'Advanced+',
  jediMaster: 'Jedi Master',
} as const;

export type KnowledgeLevel =
  (typeof KnowledgeLevels)[keyof typeof KnowledgeLevels];

export const painPoints = {
  disciplines:
    'There are too many disciplines (CSS, responsiveness, HTML, accessibility, JS...)',
  complexity: 'The topics are too complex',
  change: `There's too much change, it can be hard to keep up`,
  start: `It's hard to get started with, the learning curve is too steep`,
  time: `It demands too much time to learn`,
  frameworks: `Too many frameworks and technologies`,
  performance: `Improve performance and good practices`,
} as const;

export type PainPoint = (typeof painPoints)[keyof typeof painPoints];

export const KnowledgeByDisciplines = {
  noKnowledge: 'No knowledge',
  basic: 'Basic',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  master: 'Master',
} as const;

export type KnowledgeByDiscipline =
  (typeof KnowledgeByDisciplines)[keyof typeof KnowledgeByDisciplines];

export const Disciplines = {
  css: 'CSS',
  html: 'HTML',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  frameworks: 'Frameworks',
} as const;

export type Discipline = (typeof Disciplines)[keyof typeof Disciplines];

export const Objectives = {
  share: 'Share knowledge with fellow enthusiasts and learn from them as well',
  learn:
    'As a dev w/o frontend expertise, get some basic knowledge and learn from experts',
  tricks:
    'Acquire tips and tricks that I can integrate in my day-to-day workflow',
  news: `Keep up with what's latest in the frontend world`,
} as const;

export type Objective = (typeof Objectives)[keyof typeof Objectives];

export const ParticipationTypes = {
  active: 'Actively, participating in activities or as a presenter',
  mid: 'Mostly passive, but sometimes active',
  passive: 'Passively, as a listener',
} as const;

export type ParticipationType =
  (typeof ParticipationTypes)[keyof typeof ParticipationTypes];

export const timeTypes = {
  twoPerWeek: 'up to 2 hours/week',
  onePlusPerWeek: '1+ hour/week',
  onePerWeek: '<1 hour/week',
  onePerTwoWeeks: '1 hour/2 weeks',
  onePerMonth: '1 hour/month',
} as const;

export type TimeType = (typeof timeTypes)[keyof typeof timeTypes];

export const devsBySeniority = [
  { seniority: Seniorities.starter, number: 3 },
  { seniority: Seniorities.junior, number: 2 },
  { seniority: Seniorities.mid, number: 1 },
  { seniority: Seniorities.senior, number: 8 },
  { seniority: Seniorities.seniorPlus, number: 2 },
];

export const devsByStack = [
  { stack: Stacks.frontend, number: 9 },
  { stack: Stacks.fullstackFrontendFocused, number: 1 },
  { stack: Stacks.fullstackBalanced, number: 1 },
  { stack: Stacks.fullstackBackendFocused, number: 1 },
  { stack: Stacks.backend, number: 1 },
];

export const devsByKnowledgeLevel = [
  { knowledgeLevel: KnowledgeLevels.veryBasic, number: 1 },
  { knowledgeLevel: KnowledgeLevels.basic, number: 3 },
  { knowledgeLevel: KnowledgeLevels.intermediate, number: 6 },
  { knowledgeLevel: KnowledgeLevels.advanced, number: 4 },
  { knowledgeLevel: KnowledgeLevels.advancedPlus, number: 1 },
  { knowledgeLevel: KnowledgeLevels.jediMaster, number: 3 },
];

export const painPointVotes = [
  { painPoint: painPoints.disciplines, number: 9 },
  { painPoint: painPoints.complexity, number: 4 },
  { painPoint: painPoints.change, number: 9 },
  { painPoint: painPoints.start, number: 1 },
  { painPoint: painPoints.time, number: 1 },
  { painPoint: painPoints.frameworks, number: 10 },
  { painPoint: painPoints.performance, number: 1 },
];

export const objectiveVotes = [
  { objective: Objectives.share, number: 6 },
  { objective: Objectives.learn, number: 5 },
  { objective: Objectives.tricks, number: 13 },
  { objective: Objectives.news, number: 15 },
];

export const devsByTime = [
  { time: timeTypes.twoPerWeek, number: 1 },
  { time: timeTypes.onePlusPerWeek, number: 6 },
  { time: timeTypes.onePerWeek, number: 3 },
  { time: timeTypes.onePerTwoWeeks, number: 4 },
  { time: timeTypes.onePerMonth, number: 2 },
];

export const devsByEngagement = [
  { engagement: ParticipationTypes.active, number: 3 },
  { engagement: ParticipationTypes.mid, number: 7 },
  { engagement: ParticipationTypes.passive, number: 6 },
];

export const data = [
  { label: 'Seniority', data: devsBySeniority },
  { label: 'Stack', data: devsByStack },
  { label: 'Knowledge Level', data: devsByKnowledgeLevel },
  { label: 'Pain Points', data: painPointVotes },
  { label: 'Objectives', data: objectiveVotes },
  { label: 'Time', data: devsByTime },
  { label: 'Engagement', data: devsByEngagement },
];
