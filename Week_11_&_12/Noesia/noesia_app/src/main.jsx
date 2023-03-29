// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// React query
import { QueryClient, QueryClientProvider } from 'react-query';

// App
import App from './App';

// SCSS
import './styles/main.scss';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
  </React.StrictMode>
);
