import styled from 'styled-components';

export const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ChartCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(12px);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
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
  }
  
  .recharts-tooltip-cursor {
    fill: ${({ theme }) => theme.colors.surfaceHover};
    opacity: 0.5;
  }
`;

export const CustomTooltipContainer = styled.div`
  background: ${({ theme }) => theme.colors.surfaceHover};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  backdrop-filter: blur(16px);

  p {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.875rem;
  }

  li {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AchievementsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }
`;

export const AchievementList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

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
  padding: 1.25rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const AchievementIcon = styled.div<{ $color: string; $bg: string }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AchievementInfo = styled.div`
  flex: 1;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }
`;
