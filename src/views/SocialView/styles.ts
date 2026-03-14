import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RankingCard = styled.div<{ $isFirst?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: ${({ theme, $isFirst }) => ($isFirst ? theme.colors.surfaceHover : theme.colors.surface)};
  border: 1px solid ${({ theme, $isFirst }) => ($isFirst ? theme.colors.warning : theme.colors.border)};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(12px);
  transition: transform 0.2s;

  &:hover {
    transform: translateX(4px);
  }
`;

export const UserInfoBase = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Position = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  min-width: 2rem;
`;

export const PlayerAvatar = styled.div<{ $bg?: string }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ $bg, theme }) => $bg || theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.125rem;
`;

export const PlayerName = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

export const Points = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  svg {
    color: ${({ theme }) => theme.colors.warning};
  }
`;
