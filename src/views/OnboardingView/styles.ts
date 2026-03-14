import styled from 'styled-components';

export const OnboardingContainer = styled.div`
  min-height: 100dvh; /* Account for mobile browser UI */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      ${({ theme }) => theme.colors.primary}15 0%,
      transparent 50%
    );
    animation: rotate 20s linear infinite;
    z-index: 0;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ThemeToggle = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    transform: scale(1.05);
  }
`;

export const SlideContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  padding: 3rem 2rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  max-height: 600px;
  justify-content: space-between;
  margin: auto; /* Vertically center dynamically */

  @media (max-width: 480px) {
    padding: 1rem;
    max-height: 440px;
    border-radius: 16px;
  }
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  
  svg {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.5;
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  gap: 1.5rem;

  @media (max-width: 480px) {
    margin-top: 1rem;
    gap: 1rem;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Dot = styled.div<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '24px' : '8px')};
  height: 8px;
  border-radius: 4px;
  background: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  transition: all 0.3s ease;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SkipButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const NextButton = styled.button<{ $isLast?: boolean }>`
  background: ${({ theme, $isLast }) => ($isLast ? theme.colors.primaryGradient : 'transparent')};
  border: ${({ theme, $isLast }) => ($isLast ? 'none' : `1px solid ${theme.colors.border}`)};
  color: ${({ theme, $isLast }) => ($isLast ? '#ffffff' : theme.colors.text)};
  padding: ${({ $isLast }) => ($isLast ? '0.75rem 1.5rem' : '0.5rem')};
  border-radius: ${({ $isLast }) => ($isLast ? '12px' : '50%')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  width: ${({ $isLast }) => ($isLast ? 'auto' : '48px')};
  height: ${({ $isLast }) => ($isLast ? 'auto' : '48px')};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    background: ${({ theme, $isLast }) => ($isLast ? theme.colors.primaryGradient : theme.colors.surfaceHover)};
  }
`;
