import { useEffect, useRef, useState } from 'react';
import kind from '@enact/core/kind';
import { useTwitchContext } from '../context/TwitchContext';
import { loadTwitchEmbed } from '../utils/twitchUtils';
import LoadingSpinner from './LoadingSpinner';

const TwitchPlayer = kind({
  name: 'TwitchPlayer',

  render: () => {
    const playerRef = useRef(null);
    const { channel } = useTwitchContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (channel && playerRef.current) {
        setIsLoading(true);
        const embed = loadTwitchEmbed(playerRef.current, channel);
        
        embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
          setIsLoading(false);
        });

        return () => {
          embed.removeEventListener(Twitch.Embed.VIDEO_READY);
        };
      }
    }, [channel]);

    return (
      <div style={{ position: 'relative', width: '100%', height: '720px' }}>
        <div ref={playerRef} style={{ width: '100%', height: '100%' }} />
        {isLoading && <LoadingSpinner />}
      </div>
    );
  }
});

export default TwitchPlayer;