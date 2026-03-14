export const lightTheme = {
  colors: {
    background: '#f8fafc',
    surface: 'rgba(255, 255, 255, 0.4)', // more transparent for glass effect
    surfaceHover: 'rgba(255, 255, 255, 0.6)',
    text: '#0f172a',
    textSecondary: '#64748b',
    border: 'rgba(255, 255, 255, 0.4)', // softer lighter border
    primary: '#6366f1',
    primaryGradient: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
  },
  shadows: {
    sm: '0 4px 30px rgba(0, 0, 0, 0.05)',
    md: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
    lg: '0 12px 40px 0 rgba(0, 0, 0, 0.15)',
  },
};

export const darkTheme = {
  colors: {
    background: '#09090b', // darker background
    surface: 'rgba(24, 24, 27, 0.4)', // highly transparent dark surface
    surfaceHover: 'rgba(39, 39, 42, 0.6)',
    text: '#f8fafc',
    textSecondary: '#a1a1aa',
    border: 'rgba(255, 255, 255, 0.05)', // very subtle border
    primary: '#818cf8',
    primaryGradient: 'linear-gradient(135deg, #818cf8 0%, #f472b6 100%)',
    success: '#4ade80',
    warning: '#fbbf24',
    danger: '#f87171',
  },
  shadows: {
    sm: '0 4px 30px rgba(0, 0, 0, 0.3)',
    md: '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
    lg: '0 12px 40px 0 rgba(0, 0, 0, 0.5)',
  },
};
