import { Flame, Dumbbell, Droplets, Brain, BookOpen } from 'lucide-react';
import type { Activity } from '../../types';
import {
  CardContainer,
  BannerImage,
  CardHeader,
  IconContainer,
  StreakBadge,
  ActivityTitle,
  ProgressInfo,
  ProgressBarContainer,
  ProgressBarFill,
  CardFooter
} from './styles';

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Droplets,
  Brain,
  BookOpen
};

const bannerMap: Record<string, string> = {
  'Treino Físico': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
  'Estudos': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
  'Leitura': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
  'Alimentação Saudável': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
  'Saúde Mental / Meditação': 'https://images.unsplash.com/photo-1545389336-eaeecece96ef?w=800&q=80',
  'Hidratação': 'https://images.unsplash.com/photo-1610476906233-af3bc744be65?w=800&q=80',
};

interface ActivityCardProps {
  activity: Activity;
  onClick: () => void;
}

export const ActivityCard = ({ activity, onClick }: ActivityCardProps) => {
  const IconComponent = iconMap[activity.icon] || Dumbbell;
  const percentage = Math.min(100, Math.round((activity.current / activity.total) * 100));
  const missing = Math.max(0, activity.total - activity.current);
  const bannerUrl = bannerMap[activity.title] || 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=80'; // fallback abstract image

  return (
    <CardContainer $color={activity.color} onClick={onClick}>
      <BannerImage src={bannerUrl} alt={activity.title} />
      <CardHeader>
        <IconContainer $color={activity.color}>
          <IconComponent size={24} />
        </IconContainer>
        
        {activity.streak > 0 && (
          <StreakBadge>
            <Flame />
            <span>{activity.streak} dias</span>
          </StreakBadge>
        )}
      </CardHeader>

      <ActivityTitle>{activity.title}</ActivityTitle>

      <div>
        <ProgressInfo>
          <span>Progresso hoje</span>
          <span>{activity.current}/{activity.total} {activity.unit}</span>
        </ProgressInfo>
        
        <ProgressBarContainer style={{ marginTop: '0.5rem' }}>
          <ProgressBarFill $percentage={percentage} $color={activity.color} />
        </ProgressBarContainer>
      </div>

      <CardFooter>
        <span>Faltam {missing} {activity.unit}</span>
      </CardFooter>
    </CardContainer>
  );
};
