import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/moonstone/ThemeDecorator';
import MainPanel from '../views/MainPanel';
import { TwitchProvider } from '../context/TwitchContext';
import ErrorBoundary from '../components/ErrorBoundary';
import { useWebOS } from '../hooks/useWebOS';

const AppBase = kind({
  name: 'App',

  render: () => {
    useWebOS();

    return (
      <ErrorBoundary>
        <TwitchProvider>
          <MainPanel />
        </TwitchProvider>
      </ErrorBoundary>
    );
  }
});

export default ThemeDecorator(AppBase);