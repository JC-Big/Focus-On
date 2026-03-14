import { Gift, Crown, Palette, Zap, Ticket } from 'lucide-react';
import {
  RewardsContainer,
  PointsHeader,
  PointsInfo,
  RewardsGrid,
  RewardCard,
  RewardHeader,
  RewardIcon,
  RewardTitle,
  RedeemSection,
  ProgressBarWrapper,
  ProgressTrack,
  ProgressThumb,
  RedeemButton
} from './styles';

const currentPoints = 2350;

const mockRewards = [
  { id: '1', title: 'Avatar Premium', desc: 'Desbloqueie bordas e cores exclusivas para seu perfil', cost: 1000, icon: Crown, color: '#fbbf24' },
  { id: '2', title: 'Tema Escuro Pro', desc: 'Esquema de cores ultra dark com detalhes neon', cost: 2500, icon: Palette, color: '#8b5cf6' },
  { id: '3', title: 'Bônus de XP 2x', desc: 'Dobre a experiência ganha nas próximas 24 horas', cost: 500, icon: Zap, color: '#f43f5e' },
  { id: '4', title: 'Sorteio Mensal', desc: 'Um ticket para o sorteio de vales-presente reais', cost: 3000, icon: Ticket, color: '#10b981' },
];

export const RewardsView = () => {
  return (
    <RewardsContainer>
      <PointsHeader>
        <PointsInfo>
          <h2><Crown size={20} /> Seus Pontos</h2>
          <strong>{currentPoints.toLocaleString('pt-BR')}</strong>
          <span>pontos disponíveis</span>
        </PointsInfo>
        <Gift size={64} style={{ opacity: 0.5 }} />
      </PointsHeader>

      <RewardsGrid>
        {mockRewards.map(reward => {
          const IconComponent = reward.icon;
          const percentage = Math.min(100, Math.round((currentPoints / reward.cost) * 100));
          const canRedeem = currentPoints >= reward.cost;

          return (
            <RewardCard key={reward.id}>
              <RewardHeader>
                <RewardIcon $color={reward.color}>
                  <IconComponent size={24} />
                </RewardIcon>
                <RewardTitle>
                  <h3>{reward.title}</h3>
                  <span>{reward.desc}</span>
                </RewardTitle>
              </RewardHeader>

              <RedeemSection>
                <ProgressBarWrapper>
                  <span>{reward.cost} pts</span>
                  <ProgressTrack>
                    <ProgressThumb $percentage={percentage} />
                  </ProgressTrack>
                </ProgressBarWrapper>

                <RedeemButton $disabled={!canRedeem}>
                  {canRedeem ? 'Resgatar' : 'Pontos Insuficientes'}
                </RedeemButton>
              </RedeemSection>
            </RewardCard>
          );
        })}
      </RewardsGrid>
    </RewardsContainer>
  );
};
