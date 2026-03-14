import { useState, useRef, useEffect } from 'react';
import { Rocket, Star, Calendar, Bell, CreditCard, User, Coins, Menu } from 'lucide-react';
import { useStore } from '../../store/useStore';
import {
  HeaderContainer,
  LeftSection,
  CenterSection,
  AppTitle,
  DateText,
  RightSection,
  Badge,
  IconButton,
  SettingsWrapper,
  SettingsDropdown,
  SettingsMenuItem,
  UserProfile,
  LevelAvatarWrapper,
  SvgCircle,
  AvatarCircle,
  LevelBadge,
  MobileMenuButton,
  MobileMenuOverlay,
  MobileMenuContent
} from './styles';

import moonIcon from '../../assets/moon-yellow.png';
import sunIcon from '../../assets/sun-yellow.png';
import settingsIcon from '../../assets/settings-custom.png';
import xCloseIcon from '../../assets/x-close.png';
import { NotificationsModal } from '../NotificationsModal';
import { UserConfigModal } from '../UserConfigModal';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  const { userProfile, setProfileOpen } = useStore();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState(false);
  const [isUserConfigModalOpen, setIsUserConfigModalOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const xpPercentage = Math.min(Math.max(userProfile.xp / (userProfile.level * 1000), 0), 1);
  const offset = circumference - (xpPercentage * circumference);

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

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(currentTime);

  const formattedTime = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(currentTime);

  return (
    <>
      <HeaderContainer>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </MobileMenuButton>
        <LeftSection>
          <DateText>
            <Calendar size={14} />
            {formattedDate} - {formattedTime}
          </DateText>
        </LeftSection>

        <CenterSection>
          <AppTitle>
            <Rocket size={24} />
            <span>Tasks Raids</span>
          </AppTitle>
        </CenterSection>

        <RightSection>
          <IconButton 
          onClick={toggleTheme} 
          aria-label="Alternar tema"
        >
          {isDark ? 
            <img src={sunIcon} alt="Theme Toggle" style={{ width: 24, height: 24 }} /> : 
            <img src={moonIcon} alt="Theme Toggle" style={{ width: 24, height: 24 }} />
          }
        </IconButton>
        
        <SettingsWrapper ref={settingsRef}>
          <IconButton 
            aria-label="Configurações"
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          >
            <img src={settingsIcon} alt="Settings" style={{ width: 24, height: 24 }} />
          </IconButton>

          {isSettingsOpen && (
            <SettingsDropdown>
              <SettingsMenuItem onClick={() => { setIsSettingsOpen(false); setIsNotificationsModalOpen(true); }}>
                <Bell size={16} />
                Notificações
              </SettingsMenuItem>
              <SettingsMenuItem onClick={() => { setIsSettingsOpen(false); alert('Planos em breve!'); }}>
                <CreditCard size={16} />
                Planos
              </SettingsMenuItem>
              <SettingsMenuItem onClick={() => { setIsSettingsOpen(false); setIsUserConfigModalOpen(true); }}>
                <User size={16} />
                Configuração de conta
              </SettingsMenuItem>
            </SettingsDropdown>
          )}
        </SettingsWrapper>

        <UserProfile onClick={() => setProfileOpen(true)} style={{ cursor: 'pointer' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: '1rem' }}>
            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{userProfile.name || 'Joana S.'}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Nível {userProfile.level}</span>
          </div>
          <LevelAvatarWrapper>
            <SvgCircle viewBox="0 0 100 100">
              <circle className="bg" cx="50" cy="50" r="45" />
              <circle className="progress" cx="50" cy="50" r="45" strokeDasharray={circumference} strokeDashoffset={offset} />
            </SvgCircle>
            <AvatarCircle>
              {userProfile.avatarUrl ? (
                <img src={userProfile.avatarUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                "JS"
              )}
            </AvatarCircle>
            <LevelBadge>
              <Star size={10} fill="currentColor" />
              <span>{userProfile.level}</span>
            </LevelBadge>
          </LevelAvatarWrapper>
        </UserProfile>
      </RightSection>
    </HeaderContainer>

    {isMobileMenuOpen && (
      <MobileMenuOverlay>
        <MobileMenuContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
             <AppTitle style={{ fontSize: '1.25rem' }}>
              <Rocket size={20} />
              <span>Tasks Raids</span>
             </AppTitle>
             <IconButton 
              onClick={() => setIsMobileMenuOpen(false)} 
              aria-label="Fechar"
              style={{ color: '#ffffff', background: 'transparent', border: 'none', boxShadow: 'none' }}
             >
               <img src={xCloseIcon} alt="Fechar" style={{ width: 28, height: 28 }} />
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
              >
                {isDark ? 
                  <img src={sunIcon} alt="Theme Toggle" style={{ width: 28, height: 28 }} /> : 
                  <img src={moonIcon} alt="Theme Toggle" style={{ width: 28, height: 28 }} />
                }
              </IconButton>
            </div>

            <UserProfile onClick={() => { setIsMobileMenuOpen(false); setProfileOpen(true); }} style={{ margin: '0 auto', cursor: 'pointer' }}>
              <LevelAvatarWrapper style={{ width: 80, height: 80 }}>
                <SvgCircle viewBox="0 0 100 100">
                  <circle className="bg" cx="50" cy="50" r="45" />
                  <circle className="progress" cx="50" cy="50" r="45" strokeDasharray={circumference} strokeDashoffset={offset} />
                </SvgCircle>
                <AvatarCircle style={{ fontSize: '2rem' }}>
                  {userProfile.avatarUrl ? (
                    <img src={userProfile.avatarUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    "JS"
                  )}
                </AvatarCircle>
                <LevelBadge style={{ width: 24, height: 24, fontSize: '0.85rem', top: -4 }}>
                  <Star size={12} fill="currentColor" />
                  <span>{userProfile.level}</span>
                </LevelBadge>
              </LevelAvatarWrapper>
              
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <span style={{ fontWeight: 600, fontSize: '1.25rem', color: 'white', display: 'block' }}>{userProfile.name || 'Joana Silva'}</span>
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Nível {userProfile.level}</span>
              </div>
            </UserProfile>
            
            <SettingsDropdown style={{ position: 'static', width: '100%', marginTop: 'auto', background: 'rgba(255,255,255,0.1)' }}>
              <SettingsMenuItem style={{ color: 'white' }} onClick={() => { setIsMobileMenuOpen(false); setIsNotificationsModalOpen(true); }}>
                <Bell size={20} />
                Notificações
              </SettingsMenuItem>
              <SettingsMenuItem style={{ color: 'white' }} onClick={() => { setIsMobileMenuOpen(false); alert('Planos em breve!'); }}>
                <CreditCard size={20} />
                Planos
              </SettingsMenuItem>
              <SettingsMenuItem style={{ color: 'white' }} onClick={() => { setIsMobileMenuOpen(false); setIsUserConfigModalOpen(true); }}>
                <User size={20} />
                Configuração de conta
              </SettingsMenuItem>
            </SettingsDropdown>
          </div>
        </MobileMenuContent>
      </MobileMenuOverlay>
    )}

    <NotificationsModal 
      isOpen={isNotificationsModalOpen} 
      onClose={() => setIsNotificationsModalOpen(false)} 
    />
    
    <UserConfigModal 
      isOpen={isUserConfigModalOpen} 
      onClose={() => setIsUserConfigModalOpen(false)} 
    />
  </>
  );
};
