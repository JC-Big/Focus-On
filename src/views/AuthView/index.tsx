import { useState } from 'react';
import { Rocket } from 'lucide-react';
import {
  AuthContainer,
  AuthCard,
  LogoContainer,
  Form,
  InputGroup,
  FormOptions,
  PrimaryButton,
  Divider,
  SocialButtonsContainer,
  SocialButton,
  FooterText,
  ThemeToggle
} from './styles';

import moonIcon from '../../assets/moon-yellow.png';
import sunIcon from '../../assets/sun-yellow.png';

interface AuthViewProps {
  onLogin: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const AuthView = ({ onLogin, isDark, toggleTheme }: AuthViewProps) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <AuthContainer>
      <ThemeToggle onClick={toggleTheme}>
        {isDark ? <img src={sunIcon} alt="Theme Toggle" style={{ width: 24, height: 24 }} /> : <img src={moonIcon} alt="Theme Toggle" style={{ width: 24, height: 24 }} />}
      </ThemeToggle>

      <AuthCard className="glass">
        <LogoContainer>
          <Rocket size={32} />
          <h1>Tasks Raids</h1>
        </LogoContainer>

        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <InputGroup>
              <label>Nome de Usuário</label>
              <input type="text" placeholder="Seu nome" required />
            </InputGroup>
          )}

          <InputGroup>
            <label>E-mail</label>
            <input type="email" placeholder="seu@email.com" required />
          </InputGroup>

          <InputGroup>
            <label>Senha</label>
            <input type="password" placeholder="••••••••" required />
          </InputGroup>

          {!isLogin && (
            <InputGroup>
              <label>Confirmação de Senha</label>
              <input type="password" placeholder="••••••••" required />
            </InputGroup>
          )}

          {isLogin && (
            <FormOptions>
              <label>
                <input type="checkbox" /> Manter Ativo
              </label>
              <a href="#">Esqueceu a senha?</a>
            </FormOptions>
          )}

          <PrimaryButton type="submit">
            {isLogin ? 'Login' : 'Cadastrar-se'}
          </PrimaryButton>
        </Form>

        <Divider>
          <span>ou continue com</span>
        </Divider>

        <SocialButtonsContainer>
          <SocialButton>
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </SocialButton>
          <SocialButton>
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ color: isDark ? '#ffffff' : '#000000' }}>
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.05 2.53.8 3.22.8.76 0 2.11-.91 3.73-.83 1.62.08 3.09.77 3.94 2.05-3.32 1.96-2.73 6.31 1.09 7.82-1.02 2.02-2.3 3.78-4.04 5.25l.06-.12zm-4.34-13.84c-.4.01-1.39-.42-2.12-.99-.99-.81-1.55-2.11-1.33-3.29 1.1.2 2.37.95 3.08 1.83.65.77 1.15 1.93.97 3"/>
            </svg>
          </SocialButton>
          <SocialButton>
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
            </svg>
          </SocialButton>
        </SocialButtonsContainer>

        <FooterText>
          {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Cadastrar-se" : "Login"}
          </button>
        </FooterText>
      </AuthCard>
    </AuthContainer>
  );
};
