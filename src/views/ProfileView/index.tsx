import { Edit2, Coins, Shield, Flame, Star, Trophy, ArrowLeft } from 'lucide-react';
import { useStore } from '../../store/useStore';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem 6rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.25rem 1rem 5rem 1rem;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    font-size: 1.35rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    letter-spacing: -0.02em;
  }
`;

const CloseIconButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(12px);

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.text};
    transform: translateX(-4px);
  }
`;

// -- Identity Section
const IdentitySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.primaryGradient};
  border-radius: 1.25rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -40%;
    right: -20%;
    width: 250px;
    height: 250px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 50%;
    filter: blur(40px);
    pointer-events: none;
  }
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  font-size: 2.5rem;
  color: white;
  z-index: 1;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const EditBadge = styled.button`
  position: absolute;
  bottom: 0px;
  right: -8px;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
  z-index: 2;

  &:hover { 
    transform: scale(1.1); 
  }
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 1;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
  }

  button {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 0;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    &:hover { background: rgba(255, 255, 255, 0.3); transform: scale(1.05); }
  }
`;

// -- Stats Grid
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  text-align: center;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.2s;
  
  .val {
    font-size: 1.35rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
  }

  .label {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  svg {
    color: ${({ theme }) => theme.colors.warning};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

// -- Achievements Mural
const SectionContainer = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.01em;
`;

const MuralGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.75rem;
`;

const AchievementSlot = styled.div<{ $locked?: boolean }>`
  aspect-ratio: 1;
  border-radius: 1rem;
  background: ${({ $locked, theme }) => $locked ? theme.colors.surfaceHover : 'rgba(74, 222, 128, 0.08)' };
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ $locked, theme }) => $locked ? theme.colors.border : 'rgba(74, 222, 128, 0.25)' };
  color: ${({ $locked, theme }) => $locked ? theme.colors.textSecondary : theme.colors.success};
  opacity: ${({ $locked }) => $locked ? 0.5 : 1};
  transition: all 0.2s;

  &:hover {
    transform: ${({ $locked }) => $locked ? 'none' : 'scale(1.05)'};
  }
`;

// -- Level Progress
const LevelCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.primaryGradient};
  }
`;

const LevelTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .level-text {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1;
    margin: 0;
  }

  .xp-text {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 600;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: ${({ theme }) => theme.colors.primaryGradient};
  border-radius: 6px;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const RewardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surfaceHover};
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
`;

// -- My Goals
const GoalsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const GoalItem = styled.div`
  background: ${({ theme }) => theme.colors.surfaceHover};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.875rem;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    transform: translateX(4px);
  }
`;

const GoalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  .title {
    font-weight: 600;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
  }

  .category {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const GoalStreak = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors.danger};
  font-weight: 700;
  font-size: 0.85rem;
  background: rgba(239, 68, 68, 0.08);
  padding: 0.4rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(239, 68, 68, 0.15);
`;

export const ProfileView = () => {
  const { userProfile, setProfileOpen, activities, history } = useStore();

  const nextLevelXp = userProfile.level * 1000;
  const xpPercent = Math.min((userProfile.xp / nextLevelXp) * 100, 100);

  // Calculate global streak overall
  const activeStreak = activities.reduce((max, act) => Math.max(max, act.streak), 0);
  
  // Fake empty achievement slots (e.g. 8 total)
  const totalAchievements = 8;
  const earnedAchievements = userProfile.achievements?.length || 0;

  // Filter started activities
  const startedActivities = activities.filter(act => {
    // Check if it has any history records or any active streak/progress
    const hasHistory = history[act.id] && history[act.id].length > 0;
    return hasHistory || act.current > 0 || act.streak > 0;
  });

  return (
    <ProfileContainer>
      <HeaderRow>
        <h1>Perfil do Usuário</h1>
        <CloseIconButton onClick={() => setProfileOpen(false)}>
            <ArrowLeft size={16} />
            VOLTAR
        </CloseIconButton>
      </HeaderRow>
        
        {/* 1. Identidade (Avatar e Nome) */}
        <IdentitySection>
          <AvatarWrapper>
            {userProfile.avatarUrl ? (
              <img src={userProfile.avatarUrl} alt="Avatar" />
            ) : "JS"}
            <EditBadge onClick={() => alert("Editar foto em breve!")}>
              <Edit2 size={14} />
            </EditBadge>
          </AvatarWrapper>
          <NameWrapper>
            <h2>{userProfile.name || "Joana Silva"}</h2>
            <button onClick={() => alert("Editar nome em breve!")}>
              <Edit2 size={14} />
            </button>
          </NameWrapper>
        </IdentitySection>

        {/* 2. Estatísticas Rápidas */}
        <StatsGrid>
          <StatCard>
            <Coins size={24} />
            <span className="val">{userProfile.coins}</span>
            <span className="label">Coins</span>
          </StatCard>
          <StatCard>
            <Shield size={24} />
            <span className="val">{userProfile.plan || "Free"}</span>
            <span className="label">Plano</span>
          </StatCard>
          <StatCard>
            <Flame size={24} />
            <span className="val">{activeStreak}</span>
            <span className="label">Dias Seguidos</span>
          </StatCard>
        </StatsGrid>

        {/* 3. Mural de Conquistas */}
        <SectionContainer>
          <SectionTitle>
             <Trophy size={18} color="#4ade80" /> 
             Mural de Conquistas
          </SectionTitle>
          <MuralGrid>
            {Array.from({ length: totalAchievements }).map((_, i) => (
              <AchievementSlot key={i} $locked={i >= earnedAchievements}>
                <Trophy size={28} />
              </AchievementSlot>
            ))}
          </MuralGrid>
        </SectionContainer>

        {/* 4. Progresso de Nível */}
        <LevelCard>
          <LevelTopRow>
            <div>
              <span className="label" style={{display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600}}>Nível do Perfil</span>
              <p className="level-text">{userProfile.level}</p>
            </div>
            <span className="xp-text">{userProfile.xp} / {nextLevelXp} XP</span>
          </LevelTopRow>
          <ProgressBarContainer>
            <ProgressBarFill $percent={xpPercent} />
          </ProgressBarContainer>
          <RewardInfo>
            <Coins size={16} color="#fbbf24" />
            <span>Recompensa Próximo Nível: <strong>+100 Coins</strong></span>
          </RewardInfo>
        </LevelCard>

        {/* 5. Minhas Metas */}
        <SectionContainer>
          <SectionTitle>
             <Star size={18} color="#ec4899" /> 
             Minhas Metas
          </SectionTitle>
          <GoalsList>
            {startedActivities.length > 0 ? startedActivities.map(act => (
              <GoalItem key={act.id}>
                <GoalInfo>
                  <span className="title">{act.title}</span>
                </GoalInfo>
                <GoalStreak>
                  <Flame size={14} />
                  <span>{act.streak} dias</span>
                </GoalStreak>
              </GoalItem>
            )) : (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textAlign: 'center', padding: '1rem 0' }}>
                Ainda não possui metas iniciadas.
              </p>
            )}
          </GoalsList>
        </SectionContainer>

      </ProfileContainer>
  );
};
