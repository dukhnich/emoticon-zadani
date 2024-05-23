import Emoticon from './components/Emoticon/Emoticon'
import Configurator from './components/Configurator/Configurator';
import { useState } from 'react';

import {
  SettingsContext,
  SettingsDataInitial,
  SettingsData,
  EmoticonPartName,
} from "./context/setting-context";

const App = () => {
  const [settings, setSettings] = useState<SettingsData>(SettingsDataInitial());

  const setSettingHandler = (settings: {
    [key in EmoticonPartName]?: number;
  }) => setSettings((prev) => ({ ...prev, ...settings }));

  return (
    <SettingsContext.Provider value={{...settings, setSetting: setSettingHandler}}>
      <div className="container">
        <header>
          <h1>Vytvoř si vlastní emotikon</h1>
        </header>
        <main>
          <Emoticon />
          <Configurator />
        </main>
      </div>
    </SettingsContext.Provider>
  )
}

export default App
