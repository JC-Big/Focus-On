import { Trophy, Star } from 'lucide-react';
import {
  SocialContainer,
  RankingCard,
  UserInfoBase,
  Position,
  PlayerAvatar,
  PlayerName,
  Points
} from './styles';

const mockLeaderboard = [
  { id: '1', name: 'João Silva', initial: 'JS', points: 2350, bgColor: '#f43f5e' },
  { id: '2', name: 'Maria Souza', initial: 'MS', points: 1950, bgColor: '#8b5cf6' },
  { id: '3', name: 'Pedro Alves', initial: 'PA', points: 1800, bgColor: '#0ea5e9' },
  { id: '4', name: 'Ana Costa', initial: 'AC', points: 1200, bgColor: '#10b981' },
];

export const SocialView = () => {
  return (
    <SocialContainer>
      {mockLeaderboard.map((user, index) => {
        const isFirst = index === 0;
        return (
          <RankingCard key={user.id} $isFirst={isFirst}>
            <UserInfoBase>
              <Position>
                {isFirst ? <Trophy size={24} color="#fbbf24" style={{ marginLeft: '-4px' }} /> : index + 1}
              </Position>
              <PlayerAvatar $bg={user.bgColor}>{user.initial}</PlayerAvatar>
              <PlayerName>{user.name}</PlayerName>
            </UserInfoBase>
            
            <Points>
              <Star size={18} fill={isFirst ? '#fbbf24' : 'transparent'} />
              <span>{user.points} pts</span>
            </Points>
          </RankingCard>
        );
      })}
    </SocialContainer>
  );
};
