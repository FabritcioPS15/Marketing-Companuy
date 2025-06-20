import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { CursorProvider } from './contexts/CursorContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CursorProvider>
          <App />
        </CursorProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);