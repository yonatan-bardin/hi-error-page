import React from 'react';
import i18next from 'i18next';
import { Toolbar, Grid, Typography, AppBarProps } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import { AppBarComponent, MenuIconButton } from './Header.styled';

interface HeaderProps extends AppBarProps {
    toggleDrawer: () => void;
    isDrawerOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDrawerOpen, toggleDrawer }) => {
    return (
        <AppBarComponent position="absolute" open={isDrawerOpen}>
            <Toolbar>
                <Grid container justifyContent="space-between" direction="row" alignItems="center">
                    <Grid item>
                        <Grid container direction="row" alignItems="center">
                            <MenuIconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer} open={isDrawerOpen}>
                                <MenuIcon />
                            </MenuIconButton>
                            <Typography variant="h6" noWrap>
                                {i18next.t('appBar.title')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBarComponent>
    );
};

export { Header };
