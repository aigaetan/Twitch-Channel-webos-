import { render } from 'react-dom';
import App from './App';

const appElement = (<App />);

if (typeof window !== 'undefined') {
  render(appElement, document.getElementById('root'));
}