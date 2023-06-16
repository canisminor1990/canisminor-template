import { ThemeMode } from 'antd-style';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface AppState {
  onSetThemeMode: (themeMode: ThemeMode) => void;
  themeMode: ThemeMode;
}

export const useAppStore = create<AppState>()(
  devtools((set) => ({
    onSetThemeMode: (themeMode) => {
      set(() => ({ themeMode }), false, 'onSetThemeMode');
    },
    themeMode: 'auto',
  })),
);
