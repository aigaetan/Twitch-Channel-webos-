import { Component } from 'react';
import kind from '@enact/core/kind';
import Button from '@enact/moonstone/Button';

class ErrorBoundaryBase extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Something went wrong.</h2>
          <Button onClick={() => window.location.reload()}>
            Reload Application
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorBoundary = kind({
  name: 'ErrorBoundary',
  render: (props) => <ErrorBoundaryBase {...props} />
});

export default ErrorBoundary;