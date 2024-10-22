
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import RedirectToTelegram from './components/RedirectToTelegram';
import AppContent from './AppContent';

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                {/*<RedirectToTelegram />*/}
                <AppContent />
            </Router>
        </QueryClientProvider>
    );
};

export default App;
