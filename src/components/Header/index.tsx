import { useState, useRef, useEffect } from 'react';
import { Rocket, Star, Calendar, Bell, CreditCard, User, Coins, Menu, X, ChevronRight, Moon, Sun, Settings } from 'lucide-react';
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
  MobileMenuContent,
  MobileMenuHeader,
  MobileMenuAvatar,
  MobileMenuUserInfo,
  MobileMenuStats,
  StatItem,
  MobileMenuNav,
  MobileNavItem,
  MenuDivider,
  MobileMenuFooter
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

    <MobileMenuOverlay $isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)}>
      <MobileMenuContent $isOpen={isMobileMenuOpen} onClick={(e) => e.stopPropagation()}>
        <MobileMenuHeader>
          <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)} aria-label="Fechar">
            <X size={20} />
          </button>
          <MobileMenuAvatar onClick={() => { setIsMobileMenuOpen(false); setProfileOpen(true); }} style={{ cursor: 'pointer' }}>
            {userProfile.avatarUrl ? (
              <img src={userProfile.avatarUrl} alt="Avatar" />
            ) : (
              userProfile.name ? userProfile.name.charAt(0).toUpperCase() : "J"
            )}
          </MobileMenuAvatar>
          <MobileMenuUserInfo>
            <span className="name">{userProfile.name || 'Joana Silva'}</span>
            <span className="level">
              <Star size={14} fill="#fbbf24" color="#fbbf24" /> Nível {userProfile.level}
            </span>
          </MobileMenuUserInfo>
        </MobileMenuHeader>

        <MobileMenuStats>
          <StatItem>
            <div className="value">
              <Star size={18} fill="currentColor" /> {userProfile.xp}
            </div>
            <span className="label">Experiência</span>
          </StatItem>
          <StatItem>
            <div className="value">
              <Coins size={18} fill="currentColor" /> {userProfile.coins}
            </div>
            <span className="label">Moedas</span>
          </StatItem>
        </MobileMenuStats>

        <MobileMenuNav>
          <MobileNavItem onClick={() => { setIsMobileMenuOpen(false); setProfileOpen(true); }}>
            <User size={20} className="icon" />
            Meu Perfil
            <ChevronRight className="arrow" />
          </MobileNavItem>
          <MobileNavItem onClick={() => { setIsMobileMenuOpen(false); setIsNotificationsModalOpen(true); }}>
            <Bell size={20} className="icon" />
            Notificações
            <ChevronRight className="arrow" />
          </MobileNavItem>
          <MobileNavItem onClick={() => { setIsMobileMenuOpen(false); alert('Planos em breve!'); }}>
            <CreditCard size={20} className="icon" />
            Planos
            <ChevronRight className="arrow" />
          </MobileNavItem>
          <MenuDivider />
          <MobileNavItem onClick={() => { setIsMobileMenuOpen(false); setIsUserConfigModalOpen(true); }}>
            <Settings size={20} className="icon" />
            Configurações
            <ChevronRight className="arrow" />
          </MobileNavItem>
        </MobileMenuNav>

        <MobileMenuFooter>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Alternar Tema
          </span>
          <IconButton onClick={toggleTheme} aria-label="Alternar tema">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
        </MobileMenuFooter>
      </MobileMenuContent>
    </MobileMenuOverlay>

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
