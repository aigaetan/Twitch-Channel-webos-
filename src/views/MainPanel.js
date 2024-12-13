import kind from '@enact/core/kind';
import { Panel } from '@enact/moonstone/Panels';
import Scroller from '@enact/moonstone/Scroller';
import { Header } from '@enact/moonstone/Panels';
import TwitchPlayer from '../components/TwitchPlayer';
import ChannelInput from '../components/ChannelInput';
import { useTwitchContext } from '../context/TwitchContext';

const MainPanel = kind({
  name: 'MainPanel',

  render: () => {
    const { channel } = useTwitchContext();

    return (
      <Panel>
        <Header title="Twitch Channel Viewer" />
        <Scroller>
          <ChannelInput />
          {channel && <TwitchPlayer />}
        </Scroller>
      </Panel>
    );
  }
});

export default MainPanel;