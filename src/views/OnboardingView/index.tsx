import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Target, Layers, Trophy, Sun, Moon, ArrowRight } from 'lucide-react';
import {
  OnboardingContainer,
  SlideContainer,
  SlideContent,
  IconWrapper,
  Title,
  Description,
  NavigationContainer,
  DotsContainer,
  Dot,
  ControlsContainer,
  SkipButton,
  NextButton,
  ThemeToggle
} from './styles';
import { Blob } from '../../components/Blob';

interface OnboardingViewProps {
  onComplete: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const slides = [
  {
    icon: Target,
    title: 'Foco no Essencial',
    description: 'Construa hábitos melhores e crie uma história única em torno das suas tarefas e objetivos diários.',
  },
  {
    icon: Layers,
    title: 'Mais Estrutura',
    description: 'Trabalhe de forma mais estruturada e organizada, transformando sua rotina em pequenas missões épicas 🚀',
  },
  {
    icon: Trophy,
    title: 'Alcance Resultados',
    description: 'Gerencie suas tarefas rapidamente para obter resultados tangíveis e evoluir constantemente ✌️',
  }
];

export const OnboardingView = ({ onComplete, isDark, toggleTheme }: OnboardingViewProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide === slides.length - 1) {
      // Fire confetti from left edge
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0, y: 0.8 },
        colors: ['#646cff', '#a855f7', '#ec4899', '#ffffff']
      });
      
      // Fire confetti from right edge
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 1, y: 0.8 },
        colors: ['#646cff', '#a855f7', '#ec4899', '#ffffff']
      });

      // Give user time to see the confetti before unmounting
      setTimeout(() => {
        onComplete();
      }, 1200);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const SlideIcon = slides[currentSlide].icon;

  return (
    <OnboardingContainer>
      {/* Decorative Background Blobs */}
      <Blob $top="-5%" $left="-10%" $size="300px" $color="#646cff" />
      <Blob $bottom="10%" $right="-5%" $size="250px" $color="#a855f7" $animationDelay="2s" />
      <Blob $top="40%" $left="-15%" $size="200px" $color="#ec4899" $animationDelay="4s" />
      <Blob $bottom="-10%" $left="20%" $size="280px" $color="#646cff" $animationDelay="6s" />

      <ThemeToggle onClick={toggleTheme}>
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </ThemeToggle>

      <SlideContainer>
        {/* Inner Decorative Blobs */}
        <Blob $top="-10%" $left="-20%" $size="250px" $color="#ec4899" $opacity={0.10} />
        <Blob $bottom="-15%" $right="-15%" $size="300px" $color="#646cff" $opacity={0.10} $animationDelay="1s" />
        <Blob $top="30%" $right="-25%" $size="200px" $color="#a855f7" $opacity={0.08} $animationDelay="3s" />
        <Blob $bottom="20%" $left="-20%" $size="180px" $color="#ec4899" $opacity={0.08} $animationDelay="5s" />

        <SlideContent style={{ zIndex: 1, position: 'relative' }}>
          <IconWrapper>
            <SlideIcon />
          </IconWrapper>
          <Title>{slides[currentSlide].title}</Title>
          <Description>{slides[currentSlide].description}</Description>
        </SlideContent>

        <NavigationContainer style={{ zIndex: 1, position: 'relative' }}>
          <DotsContainer>
            {slides.map((_, index) => (
              <Dot key={index} $active={index === currentSlide} />
            ))}
          </DotsContainer>

          <ControlsContainer $isLast={currentSlide === slides.length - 1}>
            {currentSlide !== slides.length - 1 && (
              <SkipButton onClick={onComplete}>Pular</SkipButton>
            )}
            <NextButton 
              $isLast={currentSlide === slides.length - 1} 
              onClick={handleNext}
            >
              {currentSlide === slides.length - 1 ? (
                'Começar'
              ) : (
                <ArrowRight size={24} />
              )}
            </NextButton>
          </ControlsContainer>
        </NavigationContainer>
      </SlideContainer>
    </OnboardingContainer>
  );
};
