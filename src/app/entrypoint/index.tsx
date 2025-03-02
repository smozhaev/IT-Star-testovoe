import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@app/styles/index.scss';
import App from '@app/index.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);

// Главный файл (entry point) приложения: монтирует React-приложение в DOM
