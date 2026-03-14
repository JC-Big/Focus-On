import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, Zap, Target } from 'lucide-react';
import {
  DiaryContainer,
  ChartCard,
  ChartWrapper,
  CustomTooltipContainer,
  AchievementsSection,
  AchievementList,
  AchievementCard,
  AchievementIcon,
  AchievementInfo
} from './styles';

const weekData = [
  { name: 'Seg', uv: 20 },
  { name: 'Ter', uv: 45 },
  { name: 'Qua', uv: 30 },
  { name: 'Qui', uv: 60 },
  { name: 'Sex', uv: 55 },
  { name: 'Sáb', uv: 80 },
  { name: 'Dom', uv: 90 },
];

const achievements = [
  { id: '1', title: 'Start Forte', desc: 'Completou todas as atividades na Segunda', icon: Zap, color: '#f59e0b', bg: '#fef3c7' },
  { id: '2', title: 'Foco Total', desc: '7 dias consecutivos de Meditação', icon: Target, color: '#6366f1', bg: '#e0e7ff' },
  { id: '3', title: 'Atleta', desc: 'Atingiu a meta de Treino Físico por 1 mês', icon: Award, color: '#10b981', bg: '#d1fae5' },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooltipContainer>
        <p>{label}</p>
        <ul>
          <li>Produtividade: {payload[0].value}%</li>
        </ul>
      </CustomTooltipContainer>
    );
  }
  return null;
};

export const DiaryView = () => {
  return (
    <DiaryContainer>
      <ChartCard>
        <h3>Desempenho da Semana</h3>
        <ChartWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={weekData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} dy={10} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="uv" 
                stroke="#6366f1" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorUv)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </ChartCard>

      <AchievementsSection>
        <h3>Conquistas Recentes</h3>
        <AchievementList>
          {achievements.map((ach) => {
            const IconComponent = ach.icon;
            return (
              <AchievementCard key={ach.id}>
                <AchievementIcon $color={ach.color} $bg={ach.bg}>
                  <IconComponent size={24} />
                </AchievementIcon>
                <AchievementInfo>
                  <h4>{ach.title}</h4>
                  <p>{ach.desc}</p>
                </AchievementInfo>
              </AchievementCard>
            );
          })}
        </AchievementList>
      </AchievementsSection>
    </DiaryContainer>
  );
};
