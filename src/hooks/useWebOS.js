import { useEffect } from 'react';
import { setFullScreen, handleBackButton } from '../services/webOSService';
import { useTwitchContext } from '../context/TwitchContext';

export const useWebOS = () => {
  const { setChannel } = useTwitchContext();

  useEffect(() => {
    // Set full screen and prevent screen saver when streaming
    setFullScreen();

    // Handle back button
    handleBackButton(() => {
      setChannel('');
    });

    // Handle app lifecycle
    if (window.PalmSystem) {
      window.PalmSystem.keepAlive(true);
    }
  }, [setChannel]);
};