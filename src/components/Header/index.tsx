import { useState, useRef, useEffect } from 'react';
import { Rocket, Star, Lightbulb, CloudRain, Sliders, Calendar, Bell, CreditCard, User, Coins, Menu, X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import {
  HeaderContainer,
  LeftSection,
  AppTitle,
  DateText,
  RightSection,
  Badge,
  IconButton,
  SettingsWrapper,
  SettingsDropdown,
  SettingsMenuItem,
  UserProfile,
  Avatar,
  UserName,
  MobileMenuButton,
  MobileMenuOverlay,
  MobileMenuContent
} from './styles';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  const { userProfile } = useStore();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentDate = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  return (
    <>
      <HeaderContainer>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </MobileMenuButton>
        <LeftSection>
        <AppTitle>
          <Rocket size={24} />
          <span>Focus On</span>
        </AppTitle>
        <DateText>
          <Calendar size={14} />
          {currentDate}
        </DateText>
      </LeftSection>

      <RightSection>
        <Badge $type="points" title={`XP: ${userProfile.xp}`}>
          <Star size={16} fill="currentColor" />
          <span>Nível {userProfile.level}</span>
        </Badge>
        
        <Badge $type="streak">
          <Coins size={16} fill="currentColor" />
          <span>{userProfile.coins} moedas</span>
        </Badge>
        
        <IconButton 
          onClick={toggleTheme} 
          aria-label="Alternar tema"
          style={{ color: isDark ? '#ffffff' : '#000000' }}
        >
          {isDark ? 
            <Lightbulb size={20} color={isDark ? '#ffffff' : '#000000'} strokeWidth={2.5} /> : 
            <CloudRain size={20} color={isDark ? '#ffffff' : '#000000'} strokeWidth={2.5} />
          }
        </IconButton>
        
        <SettingsWrapper ref={settingsRef}>
          <IconButton 
            aria-label="Configurações"
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            style={{ color: isDark ? '#ffffff' : '#000000' }}
          >
            <Sliders size={20} color={isDark ? '#ffffff' : '#000000'} strokeWidth={2.5} />
          </IconButton>

          {isSettingsOpen && (
            <SettingsDropdown>
              <SettingsMenuItem onClick={() => { setIsSettingsOpen(false); alert('Notificações em breve!'); }}>
                <Bell size={16} />
                Notificações
              </SettingsMenuItem>
              <SettingsMenuItem onClick={() => { setIsSettingsOpen(false); alert('Planos em breve!'); }}>
                <CreditCard size={16} />
                Planos
              </SettingsMenuItem>
              <SettingsMenuItem onClick={() => { setIsSettingsOpen(false); alert('Configuração de conta em breve!'); }}>
                <User size={16} />
                Configuração de conta
              </SettingsMenuItem>
            </SettingsDropdown>
          )}
        </SettingsWrapper>

        <UserProfile>
          <Avatar>JS</Avatar>
          <UserName>João Silva</UserName>
        </UserProfile>
      </RightSection>
    </HeaderContainer>

    {isMobileMenuOpen && (
      <MobileMenuOverlay>
        <MobileMenuContent>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
             <IconButton 
              onClick={() => setIsMobileMenuOpen(false)} 
              aria-label="Prosseguir"
              style={{ color: '#ffffff', background: 'transparent', border: 'none', boxShadow: 'none' }}
             >
               <X size={28} />
             </IconButton>
          </div>
          
          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Badge $type="points" title={`XP: ${userProfile.xp}`}>
              <Star size={20} fill="currentColor" />
              <span style={{ fontSize: '1.125rem' }}>Nível {userProfile.level} ({userProfile.xp} XP)</span>
            </Badge>
            
            <Badge $type="streak">
              <Coins size={20} fill="currentColor" />
              <span style={{ fontSize: '1.125rem' }}>{userProfile.coins} moedas</span>
            </Badge>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
              <span style={{ fontWeight: 600, fontSize: '1.125rem', color: 'white' }}>Tema:</span>
              <IconButton 
                onClick={toggleTheme} 
                aria-label="Alternar tema"
                style={{ color: isDark ? '#ffffff' : '#000000', background: 'rgba(255,255,255,0.2)' }}
              >
                {isDark ? 
                  <Lightbulb size={24} color={isDark ? '#ffffff' : '#000000'} strokeWidth={2.5} /> : 
                  <CloudRain size={24} color={isDark ? '#ffffff' : '#000000'} strokeWidth={2.5} />
                }
              </IconButton>
            </div>

            <UserProfile style={{ marginTop: '2rem' }}>
              <Avatar style={{ width: '3rem', height: '3rem', fontSize: '1.25rem' }}>JS</Avatar>
              <UserName style={{ display: 'block', fontSize: '1.25rem', color: 'white' }}>João Silva</UserName>
            </UserProfile>
            
            <SettingsDropdown style={{ position: 'static', width: '100%', marginTop: 'auto', background: 'rgba(255,255,255,0.1)' }}>
              <SettingsMenuItem style={{ color: 'white' }} onClick={() => { setIsMobileMenuOpen(false); alert('Notificações em breve!'); }}>
                <Bell size={20} />
                Notificações
              </SettingsMenuItem>
              <SettingsMenuItem style={{ color: 'white' }} onClick={() => { setIsMobileMenuOpen(false); alert('Planos em breve!'); }}>
                <CreditCard size={20} />
                Planos
              </SettingsMenuItem>
              <SettingsMenuItem style={{ color: 'white' }} onClick={() => { setIsMobileMenuOpen(false); alert('Configuração de conta em breve!'); }}>
                <User size={20} />
                Configuração de conta
              </SettingsMenuItem>
            </SettingsDropdown>
          </div>
        </MobileMenuContent>
      </MobileMenuOverlay>
    )}
  </>
  );
};
