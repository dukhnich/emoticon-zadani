import { createContext, useContext } from "react";

export interface SettingsData {
  eyes: number;
  mouth: number;
  color: number;
}

export const SettingsDataInitial = (): SettingsData => ({
  eyes: 1,
  mouth: 2,
  color: 3,
});

export type EmoticonPartName = keyof SettingsData;

export interface SettingsDataContext extends SettingsData {
  setSetting: (settings: { [key in EmoticonPartName]?: number }) => void;
}

export const SettingsContext = createContext({
  ...SettingsDataInitial(),
  setSetting: (settings: { [key in EmoticonPartName]?: number }) => {},
});

export const useSettings = () => useContext(SettingsContext);
