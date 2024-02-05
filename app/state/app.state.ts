import { create } from 'zustand';

export enum AppStage {
  welcome,
  register
}

export interface AppState {
  stage: AppStage;
  showSpinner: boolean;
  changeStage: (targetStage: AppStage) => void;
  toggleSpinner: (showSpinner: boolean) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  stage: AppStage.welcome,
  showSpinner: false,
  toggleSpinner: (showSpinner: boolean) => set(() => ({ showSpinner })),
  changeStage: (targetStage: AppStage) => set(() => ({ stage: targetStage }))
}));
