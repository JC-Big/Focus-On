import styled from 'styled-components';

export const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ChartCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.25rem;
  padding: 1.75rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: -0.01em;
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;
  
  .recharts-cartesian-grid-horizontal line,
  .recharts-cartesian-grid-vertical line {
    stroke: ${({ theme }) => theme.colors.border};
  }
  
  .recharts-text {
    fill: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.8rem;
  }
  
  .recharts-tooltip-cursor {
    fill: ${({ theme }) => theme.colors.surfaceHover};
    opacity: 0.5;
  }
`;

export const CustomTooltipContainer = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  p {
    font-weight: 700;
    margin-bottom: 0.35rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.85rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    font-size: 0.8rem;
  }

  li {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

export const AchievementsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.01em;
  }
`;

export const AchievementList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AchievementCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 1.15rem;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const AchievementIcon = styled.div<{ $color: string; $bg: string }>`
  width: 3rem;
  height: 3rem;
  border-radius: 0.875rem;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const AchievementInfo = styled.div`
  flex: 1;

  h4 {
    font-size: 0.95rem;
    font-weight: 700;
    margin: 0 0 0.2rem 0;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
    line-height: 1.4;
  }
`;
