import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { globalTheme } from './theme';
import Main from './Main';

const queryClient = new QueryClient();

const App = () => {
    return (
        <ThemeProvider theme={globalTheme}>
            <QueryClientProvider client={queryClient}>
                <Main />
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default App;
