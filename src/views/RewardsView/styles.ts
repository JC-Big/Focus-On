import styled from 'styled-components';

export const RewardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PointsHeader = styled.div`
  background: ${({ theme }) => theme.colors.primaryGradient};
  border-radius: 1.5rem;
  padding: 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const PointsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.25rem;
    font-weight: 500;
    opacity: 0.9;
    margin: 0;
  }

  strong {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1;
  }
`;

export const RewardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const RewardCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(12px);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const RewardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RewardIcon = styled.div<{ $color: string }>`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  background: ${({ $color }) => $color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RewardTitle = styled.div`
  flex: 1;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 0.25rem 0;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const RedeemSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: auto;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: right;
  }
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 0.5rem;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 9999px;
  overflow: hidden;
`;

export const ProgressThumb = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background: ${({ theme, $percentage }) => ($percentage >= 100 ? theme.colors.success : theme.colors.warning)};
  transition: width 0.5s ease;
`;

export const RedeemButton = styled.button<{ $disabled: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.75rem;
  font-weight: 600;
  background: ${({ theme, $disabled }) => ($disabled ? theme.colors.border : theme.colors.primary)};
  color: ${({ theme, $disabled }) => ($disabled ? theme.colors.textSecondary : 'white')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.2s;

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 1 : 0.9)};
  }
`;
