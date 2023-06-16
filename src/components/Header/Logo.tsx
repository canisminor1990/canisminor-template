import { useThemeMode } from 'antd-style';
import { type CSSProperties, memo } from 'react';

import { darkLogo, lightLogo } from '@/components/Header/style';

interface LogoProps {
  size?: number;

  style?: CSSProperties;
}

const Logo = memo<LogoProps>(({ size = 20, style }) => {
  const { isDarkMode } = useThemeMode();
  return (
    <img alt="logo" src={isDarkMode ? darkLogo : lightLogo} style={{ height: size, ...style }} />
  );
});

export default Logo;
