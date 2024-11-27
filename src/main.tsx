import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RootApp from './App';
import './App.css';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <RootApp />
    </BrowserRouter>
  </StrictMode>
);
