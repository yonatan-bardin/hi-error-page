import * as React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import useStyles from './Main.styles';
import { MainBox } from './Main.styled';
import InfoPage from './pages/InfoPage/InfoPage';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
});

const Main = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        // <div className={classes.background}>
        <CacheProvider value={cacheRtl}>
            <Router>
                <Box display="flex">
                    <CssBaseline />
                    <MainBox>
                            <Routes>
                                <Route path="/" element={<InfoPage />} />
                                <Route path="/*" element={<InfoPage />} />
                            </Routes>
                    </MainBox>
                </Box>
            </Router>
        </CacheProvider>
        // </div>
    );
};
export default Main;
