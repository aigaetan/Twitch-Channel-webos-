import kind from '@enact/core/kind';
import Spinner from '@enact/moonstone/Spinner';

const LoadingSpinner = kind({
  name: 'LoadingSpinner',

  render: () => (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <Spinner />
    </div>
  )
});

export default LoadingSpinner;