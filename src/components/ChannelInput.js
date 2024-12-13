import kind from '@enact/core/kind';
import Input from '@enact/moonstone/Input';
import Button from '@enact/moonstone/Button';
import { useState } from 'react';
import { useTwitchContext } from '../context/TwitchContext';
import Spotlight from '@enact/spotlight';

const ChannelInput = kind({
  name: 'ChannelInput',

  render: () => {
    const [inputValue, setInputValue] = useState('');
    const { setChannel } = useTwitchContext();

    const handleSubmit = () => {
      if (inputValue.trim()) {
        setChannel(inputValue.trim());
        // Focus management for TV remote navigation
        Spotlight.focus('[data-spotlight-id="player-container"]');
      }
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 13) { // Enter key
        handleSubmit();
      }
    };

    return (
      <div style={{ padding: '20px' }}>
        <Input
          placeholder="Enter Twitch channel name"
          value={inputValue}
          onChange={(e) => setInputValue(e.value)}
          onKeyDown={handleKeyDown}
          dismissOnEnter
          style={{ marginRight: '10px' }}
        />
        <Button 
          onClick={handleSubmit}
          spotlightDisabled={!inputValue.trim()}
        >
          Watch Channel
        </Button>
      </div>
    );
  }
});

export default ChannelInput;