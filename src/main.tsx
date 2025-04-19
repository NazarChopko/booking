import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import Toast from './layouts/ToastLayout';

import './index.css';
import 'react-datepicker/dist/react-datepicker.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toast>
      <App />
    </Toast>
  </StrictMode>
);
