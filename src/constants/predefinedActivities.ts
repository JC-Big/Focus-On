import type { Activity } from '../types';

export const predefinedActivities: Omit<Activity, 'id' | 'current' | 'streak'>[] = [
  {
    title: 'Treinos Físicos',
    total: 60,
    unit: 'min',
    color: 'linear-gradient(135deg, #f43f5e, #fb923c)', // Rose-Orange
    icon: 'Dumbbell',
  },
  {
    title: 'Estudos',
    total: 120,
    unit: 'min',
    color: 'linear-gradient(135deg, #818cf8, #c084fc)', // Indigo-Purple
    icon: 'BookOpen',
  },
  {
    title: 'Alimentação',
    total: 3,
    unit: 'refeições',
    color: 'linear-gradient(135deg, #10b981, #34d399)', // Emerald
    icon: 'Apple',
  },
  {
    title: 'Saúde Mental',
    total: 15,
    unit: 'min',
    color: 'linear-gradient(135deg, #8b5cf6, #d946ef)', // Violet-Fuchsia
    icon: 'Brain',
  },
];
