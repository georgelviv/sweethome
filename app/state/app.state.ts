import { create } from 'zustand';

export enum AppStage {
  welcome,
  register
}

export interface AppState {
  stage: AppStage;
  changeStage: (targetStage: AppStage) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  stage: AppStage.welcome,
  changeStage: (targetStage: AppStage) => set(() => ({ stage: targetStage }))
}));
