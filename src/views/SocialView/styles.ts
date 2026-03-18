import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const RankingCard = styled.div<{ $isFirst?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.15rem 1.5rem;
  background: ${({ theme, $isFirst }) => ($isFirst ? theme.colors.surfaceHover : theme.colors.surface)};
  border: 1px solid ${({ theme, $isFirst }) => ($isFirst ? theme.colors.warning + '50' : theme.colors.border)};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  ${({ $isFirst }) => $isFirst && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #fbbf24, #f59e0b);
    }
  `}

  &:hover {
    transform: translateX(6px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const UserInfoBase = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Position = styled.span`
  font-size: 1.15rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textSecondary};
  min-width: 2rem;
  text-align: center;
`;

export const PlayerAvatar = styled.div<{ $bg?: string }>`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: ${({ $bg, theme }) => $bg || theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 4px 12px -2px ${({ $bg }) => ($bg || '#6366f1')}40;
`;

export const PlayerName = styled.span`
  font-weight: 600;
  font-size: 0.95rem;
`;

export const Points = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};

  svg {
    color: ${({ theme }) => theme.colors.warning};
  }
`;
