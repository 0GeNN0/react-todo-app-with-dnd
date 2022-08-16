import ReactDOM from 'react-dom/client';

import App from './App';
import Context from './Context';

import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Context>
    <App />
  </Context>
);