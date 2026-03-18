import styled from 'styled-components';

export const RewardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PointsHeader = styled.div`
  background: ${({ theme }) => theme.colors.primaryGradient};
  border-radius: 1.25rem;
  padding: 2rem 2.5rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  overflow: hidden;

  /* Decorative glow */
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    filter: blur(40px);
    pointer-events: none;
  }

  @media (max-width: 640px) {
    padding: 1.75rem 1.5rem;
  }
`;

export const PointsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  z-index: 1;

  h2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.05rem;
    font-weight: 500;
    opacity: 0.9;
    margin: 0;
  }

  strong {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.03em;

    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }

  span {
    font-size: 0.85rem;
    opacity: 0.8;
  }
`;

export const RewardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const RewardCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.25rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

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
  border-radius: 0.875rem;
  background: ${({ $color }) => $color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px -2px ${({ $color }) => $color}40;
`;

export const RewardTitle = styled.div`
  flex: 1;

  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0 0 0.2rem 0;
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.4;
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
  gap: 0.4rem;

  span {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: right;
  }
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 0.4rem;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 9999px;
  overflow: hidden;
`;

export const ProgressThumb = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background: ${({ theme, $percentage }) => ($percentage >= 100 ? theme.colors.success : theme.colors.warning)};
  border-radius: 9999px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const RedeemButton = styled.button<{ $disabled: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.9rem;
  background: ${({ theme, $disabled }) => ($disabled ? theme.colors.border : theme.colors.primaryGradient)};
  color: ${({ theme, $disabled }) => ($disabled ? theme.colors.textSecondary : 'white')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.25s;
  box-shadow: ${({ $disabled, theme }) => ($disabled ? 'none' : theme.shadows.sm)};

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 1 : 0.9)};
    transform: ${({ $disabled }) => ($disabled ? 'none' : 'translateY(-1px)')};
  }
`;
