import { useState } from 'react';
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
      onComplete();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const SlideIcon = slides[currentSlide].icon;

  return (
    <OnboardingContainer>
      <ThemeToggle onClick={toggleTheme}>
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </ThemeToggle>

      <SlideContainer>
        <SlideContent>
          <IconWrapper>
            <SlideIcon />
          </IconWrapper>
          <Title>{slides[currentSlide].title}</Title>
          <Description>{slides[currentSlide].description}</Description>
        </SlideContent>

        <NavigationContainer>
          <DotsContainer>
            {slides.map((_, index) => (
              <Dot key={index} $active={index === currentSlide} />
            ))}
          </DotsContainer>

          <ControlsContainer>
            <SkipButton onClick={onComplete}>Pular</SkipButton>
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
