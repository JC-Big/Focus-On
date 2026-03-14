import styled, { keyframes, css } from 'styled-components';

interface BlobProps {
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
  $size: string;
  $color: string;
  $opacity?: number;
  $animationDelay?: string;
}

const morph = keyframes`
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`;

export const Blob = styled.div<BlobProps>`
  position: absolute;
  top: ${({ $top }) => $top || 'auto'};
  bottom: ${({ $bottom }) => $bottom || 'auto'};
  left: ${({ $left }) => $left || 'auto'};
  right: ${({ $right }) => $right || 'auto'};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background-color: ${({ $color }) => $color};
  opacity: ${({ $opacity }) => $opacity || 0.15};
  filter: blur(10px);
  z-index: 0; /* Ensures it stays behind the card */
  pointer-events: none;
  
  ${({ $animationDelay }) => css`
    animation: ${morph} 8s ease-in-out infinite alternate;
    animation-delay: ${$animationDelay || '0s'};
  `}
`;
